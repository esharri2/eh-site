import { FatOscillator, Reverb, Master } from "tone";
import {
  BufferGeometry,
  Line,
  LineBasicMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
  Vector3,
} from "three";
import oscillatorSettings from "./oscillatorSettings.json";

export default class {
  constructor(id, padElement) {
    this.id = id;
    this.osc = new FatOscillator(
      oscillatorSettings[id].frequency,
      oscillatorSettings[id].type,
      oscillatorSettings[id].spread
    );
    this.reverb = new Reverb({decay:1});

    this.settings = oscillatorSettings[id];
    this.padElement = padElement;
    this.vizElement = padElement.querySelector(".viz");
    this.notes = [
      { x: oscillatorSettings[id].frequency, y: oscillatorSettings[id].spread },
    ];
    this.timeoutId;
    this.viz = {
      camera: new PerspectiveCamera(
        25,
        window.innerWidth / window.innerHeight,
        1,
        500
      ),
      material: new LineBasicMaterial({ color: 0x0a090c }),
      points: [],
      renderer: new WebGLRenderer({ alpha: true }),
      scene: new Scene(),
    };
  }

  set noteStack(newNotes) {
    this.notes.push(newNotes);
    this.handleNoteStackUpdate(newNotes);
  }

  initViz() {
    const { camera, points, renderer, scene } = this.viz;
    const size = this.vizElement.offsetHeight;
    renderer.setClearColor(0xfff5ff, 0);
    renderer.setSize(size, size);

    this.vizElement.appendChild(renderer.domElement);
    camera.position.set(0, 0, 100);
    camera.lookAt(0, 0, 0);

    points.push(new Vector3(0, 0, 0));
  }

  play() {
    this.initViz();
    this.osc.chain(this.reverb).toMaster();
    this.osc.start();
    let currentNote = 0;
    const { spread, frequency, loopTime, count } = this.settings;

    const switchNote = () => {
      currentNote + 1 === this.notes.length ? (currentNote = 0) : currentNote++;
      const { x, y } = this.notes[currentNote];
      const newFrequency = currentNote === 0 ? frequency : frequency * x;
      const newspread = currentNote === 0 ? spread : spread * y * 10;
      this.osc.frequency.rampTo(newFrequency, loopTime / 2);
      this.osc.spread = newspread;
      this.timeoutId = window.setTimeout(switchNote, 1000 * loopTime);
    };

    switchNote();
  }

  stop() {
    this.osc.stop();
    this.clearScene();
    this.viz.points = [];
    this.viz.scene.dispose();
    this.notes = [this.notes[0]];
    clearTimeout(this.timeoutId);
  }

  clearScene() {
    const { scene } = this.viz;
    while (scene.children.length > 0) {
      scene.remove(scene.children[0]);
    }
  }

  handleNoteStackUpdate(newNotes) {
    const { camera, material, points, renderer, scene } = this.viz;
    this.clearScene();

    let x = Math.ceil(newNotes.x * 12);
    let y = Math.ceil(newNotes.y * 12);
    let z = Math.ceil((newNotes.x + newNotes.y)/2 * 12);
    const isEvenPoint = points.length % 2;


    // Add point according to drop
    if (isEvenPoint) {
      x = x * -1;
      y = y * -1;
      z = z * -1;
    }
    points.push(new Vector3(x, y, z));

    // Create random point near center of cluster
    let randomX = this.getRandomNumber(12);
    let randomY = this.getRandomNumber(12);
    let randomZ = this.getRandomNumber(6);
    if (isEvenPoint) {
      randomX = randomX * -1;      
      randomY = randomX * -1;      
      randomZ = randomX * -1;      
    }
   
    // points.push(new Vector3(randomX, randomY, randomZ ));
    console.log(points);


    const geometry = new BufferGeometry().setFromPoints(points);
    const line = new Line(geometry, material);
    scene.add(line);

    function animate() {
      requestAnimationFrame(animate);
      // line.rotation.x += 0.01;
      line.rotation.y += 0.008;
      line.rotation.z += 0.008;
      renderer.render(scene, camera);
    }
    animate();
  }

  getRandomNumber(max) {
    return Math.floor(Math.random() * max) + 1;
  }
}
