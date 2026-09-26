/**
 * SMART KHADHI CHAKRA - Hero 3D Interactive Digital Twin
 * Real-Time WebGL Engineering Digital Twin for the First / Home Slide
 * Accurately modeled after the 8-Spindle Smart Khadi Chakra Machine Architecture
 * (Problem Statement ID: SIH26020 - Team NOVAMINDS)
 *
 * Mechanical Architecture & Assemblies:
 * 1. Supporting Chassis: Industrial powder-coated A-frame with vibration-dampening feet & upright columns
 * 2. Left-Side Transmission System:
 *    - Ergonomic 5-spoke hand crank wheel on left input stub shaft
 *    - Central foot treadle pedal linked via pushrod to eccentric crank throw
 *    - Lower vented flywheel housing with 2.4 kg cast rim flywheel & heavy-duty V-belt
 *    - Hardened multi-stage step-up spur gear train (1:10.8 speed multiplier) behind safety shield
 * 3. 8 Drafting Stations: Fluted bottom steel rollers, beige synthetic rubber cots & knurled brass knobs
 * 4. 8 Overhead Cotton Roving Packages: Mounted on top creel with crimson tension locking caps
 * 5. 8-Spindle Synchronized Spinning Array: Vertical precision spindles with emerald green base whorls & Khadi bobbins
 * 6. Continuous Yarn Pathway: Top roving -> tension caps -> drafting nips -> IR sensors -> eyelets -> bobbins
 * 7. Smart Telemetry: Optical encoder, 8-channel IR break sensors, dual-color LED indicators, and live LCD HUD
 */

(function () {
  'use strict';

  // 10-Step Guided Engineering Flow Definitions
  const HERO_DEMO_STEPS = [
    {
      stepNum: 0,
      title: 'Stationary Inspection',
      badge: 'START — 3D DIGITAL TWIN OVERVIEW',
      tagline: 'Complete 8-Spindle Smart Khadhi Chakra Overview',
      desc: 'The complete machine in clean stationary state. Engineered with rigid industrial chassis, 8 synchronized spindles, dual manual drive modes (hand crank & foot pedal), inertial flywheel, step-up gear train, drafting system, and smart self-powered telemetry.',
      highlight: [],
      camPos: { x: 2.8, y: 1.1, z: 3.6 },
      camTarget: { x: 0.0, y: -0.15, z: 0.0 },
      duration: 4800,
      mode: 'crank',
      rpm: 0
    },
    {
      stepNum: 1,
      title: 'Manual Hand Crank Input',
      badge: 'STEP 01 / 10 — HAND CRANK INPUT',
      tagline: '5-Spoke Hand Crank ➔ Left Transmission Input Shaft',
      desc: 'Artisan rotates the left-side handwheel at 50–70 RPM. Contoured revolving grip transmits manual rotational torque directly into the left transmission input shaft and flywheel belt drive.',
      highlight: ['handCrank', 'mainShaft'],
      camPos: { x: -3.2, y: 0.7, z: 2.0 },
      camTarget: { x: -1.6, y: -0.1, z: 0.0 },
      duration: 5200,
      mode: 'crank',
      rpm: 420
    },
    {
      stepNum: 2,
      title: 'Ergonomic Foot Pedal Input',
      badge: 'STEP 02 / 10 — FOOT PEDAL INPUT',
      tagline: 'Foot Treadle ➔ Articulated Pushrod ➔ Eccentric Crank Throw',
      desc: 'Demonstrating foot treadle drive: reciprocating foot strokes pivot the treadle, driving the connecting pushrod and eccentric crank throw to rotate the transmission system. Reduces upper body fatigue by 65%.',
      highlight: ['footPedal', 'mainShaft'],
      camPos: { x: 0.8, y: -0.8, z: 2.5 },
      camTarget: { x: 0.0, y: -1.1, z: 0.15 },
      duration: 5200,
      mode: 'pedal',
      rpm: 500
    },
    {
      stepNum: 3,
      title: 'Inertial Flywheel Cadence Smoothing',
      badge: 'STEP 03 / 10 — INERTIAL FLYWHEEL',
      tagline: 'V-Belt ➔ Lower Flywheel Axle (Kinetic Energy Buffer)',
      desc: 'The heavy rim-weighted cast flywheel is integrated directly in the transmission drive path. It absorbs manual stroke pulses, smooths rotational cadence variations, and supplies uniform continuous torque downstream to the gears.',
      highlight: ['flywheel'],
      camPos: { x: -2.2, y: -0.5, z: 2.1 },
      camTarget: { x: -1.4, y: -0.7, z: 0.0 },
      duration: 5200,
      mode: 'crank',
      rpm: 650
    },
    {
      stepNum: 4,
      title: 'Precision Step-Up Gear Train',
      badge: 'STEP 04 / 10 — GEAR TRANSMISSION',
      tagline: 'Left-Side Hardened Spur Gear Train (1:10.8 Multiplier)',
      desc: 'Smoothed flywheel rotation drives the multi-stage spur gear train under the clear safety guard. Multiplies input cadence to 650–800 RPM with positive mechanical timing and zero slip.',
      highlight: ['gearTrain'],
      camPos: { x: -2.5, y: 0.45, z: 1.7 },
      camTarget: { x: -1.45, y: 0.1, z: 0.0 },
      duration: 5000,
      mode: 'crank',
      rpm: 650
    },
    {
      stepNum: 5,
      title: 'Horizontal Fiber Drafting Zone',
      badge: 'STEP 05 / 10 — DRAFTING ZONE',
      tagline: '8 Drafting Stations with Synthetic Rubber Cots & Steel Rollers',
      desc: 'Precision bottom fluted rollers and top rubber cots grip cotton roving from the top creel spools, performing controlled fiber drafting at exact draft ratios before delivering yarn to the spindles.',
      highlight: ['rollers'],
      camPos: { x: 0.2, y: 0.35, z: 2.1 },
      camTarget: { x: 0.0, y: 0.05, z: 0.15 },
      duration: 5000,
      mode: 'crank',
      rpm: 650
    },
    {
      stepNum: 6,
      title: '8-Spindle Synchronized Drive',
      badge: 'STEP 06 / 10 — 8-SPINDLE SPINNING',
      tagline: 'High-Efficiency Multiplied Drive ➔ 8 Precision Spindles',
      desc: 'Drive motion synchronizes all 8 lower spinning spindles. Spindles rotate at 650+ RPM with emerald green base whorls, inserting 22 TPI twist for consistent 40s Ne Khadi yarn.',
      highlight: ['spindles'],
      camPos: { x: 0.0, y: -0.35, z: 2.8 },
      camTarget: { x: 0.0, y: -0.6, z: 0.35 },
      duration: 5400,
      mode: 'crank',
      rpm: 650
    },
    {
      stepNum: 7,
      title: 'Continuous Yarn Production & Winding',
      badge: 'STEP 07 / 10 — YARN PATHWAY',
      tagline: 'Top Creel Roving ➔ Tension Caps ➔ Drafting ➔ 8 Wound Bobbins',
      desc: 'Continuous cotton yarn streams down through tension guides, drafting nips, and IR sensors, winding evenly onto the 8 high-speed spinning bobbins (cops).',
      highlight: ['rollers', 'spindles'],
      camPos: { x: 0.85, y: 0.4, z: 2.6 },
      camTarget: { x: 0.1, y: 0.0, z: 0.2 },
      duration: 5400,
      mode: 'crank',
      rpm: 650
    },
    {
      stepNum: 8,
      title: 'Smart Sensor Telemetry',
      badge: 'STEP 08 / 10 — SENSOR MONITORING',
      tagline: '8-Channel IR Break Sensors & Slotted Shaft Optical Encoder',
      desc: 'Non-contact infrared sensors continuously monitor yarn continuity on all 8 spindles at 100 Hz with zero mechanical drag. The optical shaft encoder tracks precise RPM.',
      highlight: ['sensors', 'display'],
      camPos: { x: 1.3, y: 0.15, z: 2.0 },
      camTarget: { x: 0.5, y: -0.15, z: 0.25 },
      duration: 5000,
      mode: 'crank',
      rpm: 650
    },
    {
      stepNum: 9,
      title: 'Breakage Detection & Instant Alert',
      badge: 'STEP 09 / 10 — BREAKAGE DETECTION',
      tagline: 'Simulated Break on Spindle 04: <50ms Detection & HUD Alert',
      desc: 'When yarn breaks on Spindle 04, the IR sensor flags the event in <50ms. Spindle #04 LED flashes RED, main status LED flashes RED, and the digital display triggers a high-visibility emergency warning.',
      highlight: ['led', 'display', 'sensors'],
      camPos: { x: 0.8, y: 0.0, z: 2.1 },
      camTarget: { x: 0.35, y: -0.1, z: 0.3 },
      duration: 5600,
      mode: 'crank',
      breakTest: true,
      rpm: 650
    },
    {
      stepNum: 10,
      title: 'Complete Integrated Digital Twin',
      badge: 'STEP 10 / 10 — FINAL OUTPUT',
      tagline: 'Input ➔ Flywheel ➔ Gears ➔ Drafting ➔ 8 Spindles ➔ Telemetry',
      desc: 'Fully integrated operation: Dual Manual Drive, Inertial Flywheel Smoothing, Hardened Gear Train, 8 Synchronized Spindles, Continuous Yarn Winding, and Live Smart Telemetry.',
      highlight: ['handCrank', 'gearTrain', 'flywheel', 'outputShaft', 'spindles', 'sensors', 'led', 'display'],
      camPos: { x: 2.8, y: 1.1, z: 3.6 },
      camTarget: { x: 0.0, y: -0.15, z: 0.0 },
      duration: 6500,
      mode: 'crank',
      rpm: 650
    }
  ];

  // 9 Component Hotspots & Engineering Specifications
  const COMPONENT_CATALOG = {
    handCrank: {
      name: '1. 5-Spoke Hand Crank Wheel',
      category: 'Mechanical Input',
      role: 'Primary Manual Rotational Input Mechanism',
      description: 'Polished 5-spoke alloy handwheel with contoured rim and revolving handle grip mounted on the left-side transmission input stub shaft. Artisan rotates the wheel at 50–70 RPM to supply mechanical input directly into the transmission.',
      specs: 'Diameter: 360 mm • Spokes: 5 Cast Alloy • Grip: Turned Contoured • Input Cadence: 50–70 RPM',
      camPos: { x: -3.2, y: 0.7, z: 2.0 },
      camTarget: { x: -1.6, y: -0.1, z: 0.0 }
    },
    footPedal: {
      name: '2. Central Foot Pedal & Linkage',
      category: 'Mechanical Input',
      role: 'Ergonomic Treadle Drive for Fatigue Reduction',
      description: 'Sturdy ribbed foot treadle linked via base pivot shaft and connecting pushrod to an eccentric crank throw on the left transmission system. Converts reciprocating foot strokes into continuous rotary torque, reducing arm fatigue by 65%.',
      specs: 'Width: 380 mm • Rungs: 6 Ribbed Anti-Slip • Linkage: Articulated Pushrod & Crank Throw • Fatigue Reduction: 65%',
      camPos: { x: 0.8, y: -0.8, z: 2.5 },
      camTarget: { x: 0.0, y: -1.1, z: 0.15 }
    },
    gearTrain: {
      name: '3. Step-Up Mechanical Gear Train',
      category: 'Mechanical Transmission',
      role: '1:10.8 High-Efficiency Angular Velocity Multiplier',
      description: 'Precision hardened steel spur gears and compound cluster housed behind a clear polycarbonate guard on the left frame. Multiplies input cadence up to high-speed spindle velocity with positive, non-slip tooth engagement.',
      specs: 'Gear Ratio: 1 : 10.8 • Material: Hardened Alloy Steel • Guard: Clear Polycarbonate • Efficiency: 95%',
      camPos: { x: -2.5, y: 0.45, z: 1.7 },
      camTarget: { x: -1.45, y: 0.1, z: 0.0 }
    },
    flywheel: {
      name: '4. Inertial Flywheel & Dynamo Unit',
      category: 'Kinetic Momentum Buffer',
      role: 'Rotational Energy Storage & Cadence Smoothing',
      description: 'A precision-balanced 2.4 kg rim-weighted cast flywheel mounted on the transmission shaft inside a vented steel housing. Absorbs manual stroke impulses and delivers continuous, smoothed torque to the gear train.',
      specs: 'Mass: 2.4 kg Cast Rim • Inertia: 0.042 kg·m² • Stored Energy: 32.4 J • Drive: In-Line Transmission',
      camPos: { x: -2.2, y: -0.5, z: 2.1 },
      camTarget: { x: -1.4, y: -0.7, z: 0.0 }
    },
    outputShaft: {
      name: '5. Left Input Stub Shaft & Mount',
      category: 'Power Transmission',
      role: 'Synchronized Torque Distribution Hub',
      description: 'Precision ground stainless steel stub shaft supported on a rigid pillow block bronze bearing on the left frame post. Directly mounts the hand crank wheel, upper V-belt pulley, and input spur gear.',
      specs: 'Shaft: Left Transmission Input • Diameter: 28 mm Stainless Steel • Bearings: Sintered Bronze',
      camPos: { x: -1.8, y: 0.35, z: 1.6 },
      camTarget: { x: -1.4, y: 0.2, z: 0.0 }
    },
    spindles: {
      name: '6. 8-Spindle Synchronized Array',
      category: 'Spinning Mechanism',
      role: 'Simultaneous 8-Thread Ring Spinning & Bobbin Winding',
      description: 'Exactly 8 vertical spinning spindles equispaced along the spindle bed with green base whorl collars and wound Khadi yarn cops. Spins continuous 40s Ne pure Khadi yarn at 650–800 RPM in synchronized harmony.',
      specs: 'Count: Exactly 8 Spindles • Pitch: 58 mm • Speed: 650–800 RPM • Bobbins: Precision Wound Khadi',
      camPos: { x: 0.0, y: -0.35, z: 2.8 },
      camTarget: { x: 0.0, y: -0.6, z: 0.35 }
    },
    sensors: {
      name: '7. Smart Non-Contact IR Sensors',
      category: 'Smart Telemetry',
      role: 'Zero-Drag RPM & 8-Channel Yarn Break Detection',
      description: 'Slotted optical disk encoder on the main shaft and an 8-channel non-contact infrared optical transceiver array positioned across all 8 yarn paths. Delivers zero mechanical drag with 100 Hz continuous sampling.',
      specs: 'RPM Sensor: Optical Disk Encoder • Yarn Sensors: 8x Non-Contact IR • Drag: 0.00 N·m • Latency: < 50 ms',
      camPos: { x: 1.1, y: 0.2, z: 2.0 },
      camTarget: { x: 0.4, y: -0.2, z: 0.25 }
    },
    led: {
      name: '8. Dual-Color Status LED Indicators',
      category: 'Visual Feedback',
      role: 'Instant Optical Health & Breakage Alert Beacons',
      description: 'High-intensity dual-color LED indicators located on the front control panel and directly above each spindle channel. Illuminates steady emerald green during normal spinning, and flashes vivid red instantly on thread break.',
      specs: 'Colors: Emerald Green (Normal) / Flashing Red (Break Alert) • Channels: 8 Spindle + 1 Main • Response: < 50 ms',
      camPos: { x: 1.5, y: 0.2, z: 1.6 },
      camTarget: { x: 1.45, y: 0.32, z: 0.1 }
    },
    display: {
      name: '9. Smart Telemetry LCD HUD Display',
      category: 'Smart Telemetry',
      role: 'Live Real-Time Artisan Metrics Dashboard',
      description: 'High-contrast graphical screen housed in an industrial enclosure on the right frame. Displays live spindle RPM, active spindle count (8/8), battery / self-power level (78%), cumulative yarn length, and instant break alerts.',
      specs: 'Display: Backlit Color LCD HUD • Refresh: 30 Hz • Metrics: RPM, Tension, Battery 78%, Spindles 8/8',
      camPos: { x: 1.8, y: 0.35, z: 1.6 },
      camTarget: { x: 1.45, y: 0.35, z: 0.1 }
    }
  };

  // Main 3D Simulator Engine Class
  class HeroCharkha3DEngine {
    constructor(containerId) {
      this.container = document.getElementById(containerId);
      if (!this.container) {
        console.warn(`[HeroCharkha3D] Container #${containerId} not found.`);
        return;
      }

      // Operational States
      this.isRunning = true;
      this.inputDriveMode = 'crank'; // 'crank' | 'pedal'
      this.isAutoDemo = false;
      this.currentDemoStep = 0;
      this.autoDemoTimer = null;
      this.isExploded = false;
      this.explodedFactor = 0.0;
      this.targetExplodedFactor = 0.0;
      this.showTorqueFlow = false;
      this.isBreakSimulated = false;
      this.breakTimeout = null;
      this.selectedComponentKey = null;

      // Mechanical Simulation Variables
      this.rotAngle = 0;
      this.pedalAngle = 0;
      this.rpmVal = 650;
      this.targetRpm = 650;
      this.yarnMeters = 124.8;
      this.lastTimestamp = performance.now();
      this.pulsePhase = 0;
      this.yarnTextureOffset = 0;
      this.torqueFlowPhase = 0;

      // Camera Animation
      this.camPosCurrent = new THREE.Vector3(2.8, 1.1, 3.6);
      this.camTargetCurrent = new THREE.Vector3(0.0, -0.15, 0.0);
      this.camPosTarget = this.camPosCurrent.clone();
      this.camTargetLookAt = this.camTargetCurrent.clone();
      this.isCamTweening = false;

      // Raycasting for interactive click
      this.raycaster = new THREE.Raycaster();
      this.mouse = new THREE.Vector2();
      this.clickableMeshes = [];

      this.initScene();
      this.initMaterials();
      this.buildCompleteCharkhaModel();
      this.initLighting();
      this.initControls();
      this.initTorqueFlowVisualization();
      this.initEventListeners();
      this.initCanvasDisplay();

      // Start render loop
      this.animate = this.animate.bind(this);
      requestAnimationFrame(this.animate);

      console.log('[HeroCharkha3D] Initialized cleaned 8-Spindle Smart Khadi Chakra 3D digital twin.');
    }

    initScene() {
      const w = this.container.clientWidth || 600;
      const h = this.container.clientHeight || 450;

      this.scene = new THREE.Scene();
      this.scene.background = new THREE.Color(0xfbf9f5);
      this.scene.fog = new THREE.FogExp2(0xfbf9f5, 0.026);

      this.camera = new THREE.PerspectiveCamera(36, w / h, 0.1, 90);
      this.camera.position.copy(this.camPosCurrent);

      this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
      this.renderer.setSize(w, h);
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      this.renderer.shadowMap.enabled = true;
      this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
      this.renderer.toneMappingExposure = 1.35;

      this.container.innerHTML = '';
      this.container.appendChild(this.renderer.domElement);

      // Studio Ground Grid & Soft Shadow Catcher
      const groundGrid = new THREE.GridHelper(12, 24, 0xd97706, 0xe2e8f0);
      groundGrid.position.y = -1.56;
      this.scene.add(groundGrid);

      const groundShadowGeo = new THREE.PlaneGeometry(9, 9);
      const groundShadowMat = new THREE.ShadowMaterial({ opacity: 0.16 });
      const groundShadow = new THREE.Mesh(groundShadowGeo, groundShadowMat);
      groundShadow.rotation.x = -Math.PI / 2;
      groundShadow.position.y = -1.55;
      groundShadow.receiveShadow = true;
      this.scene.add(groundShadow);

      // Handle Container Resize
      window.addEventListener('resize', () => {
        if (!this.container) return;
        const nw = this.container.clientWidth;
        const nh = this.container.clientHeight;
        if (nw > 0 && nh > 0) {
          this.camera.aspect = nw / nh;
          this.camera.updateProjectionMatrix();
          this.renderer.setSize(nw, nh);
        }
      });
    }

    initMaterials() {
      // Procedural Yarn Texture for realistic fiber winding
      const yarnCanvas = document.createElement('canvas');
      yarnCanvas.width = 128;
      yarnCanvas.height = 128;
      const yctx = yarnCanvas.getContext('2d');
      yctx.fillStyle = '#faf8f5';
      yctx.fillRect(0, 0, 128, 128);
      yctx.strokeStyle = '#e2dbd0';
      yctx.lineWidth = 1.4;
      for (let y = 0; y < 128; y += 4) {
        yctx.beginPath();
        yctx.moveTo(0, y);
        yctx.lineTo(128, (y + 16) % 128);
        yctx.stroke();
      }
      this.texYarnWound = new THREE.CanvasTexture(yarnCanvas);
      this.texYarnWound.wrapS = THREE.RepeatWrapping;
      this.texYarnWound.wrapT = THREE.RepeatWrapping;
      this.texYarnWound.repeat.set(2, 6);

      this.mat = {
        // Powder-coated olive / battleship-grey industrial machine chassis
        frameMetal: new THREE.MeshStandardMaterial({
          color: 0x5a6365,
          metalness: 0.75,
          roughness: 0.38,
          name: 'frameMetal'
        }),
        frameDark: new THREE.MeshStandardMaterial({
          color: 0x2d3436,
          metalness: 0.85,
          roughness: 0.30,
          name: 'frameDark'
        }),
        steelPolished: new THREE.MeshStandardMaterial({
          color: 0xedf2f7,
          metalness: 0.95,
          roughness: 0.12,
          name: 'steelPolished'
        }),
        steelGunmetal: new THREE.MeshStandardMaterial({
          color: 0x4a5568,
          metalness: 0.90,
          roughness: 0.22,
          name: 'steelGunmetal'
        }),
        brassGold: new THREE.MeshStandardMaterial({
          color: 0xd97706,
          metalness: 0.88,
          roughness: 0.24,
          name: 'brassGold'
        }),
        flywheelCast: new THREE.MeshStandardMaterial({
          color: 0xc49b45,
          metalness: 0.82,
          roughness: 0.28,
          name: 'flywheelCast'
        }),
        rubberBlack: new THREE.MeshStandardMaterial({
          color: 0x1e293b,
          roughness: 0.85,
          metalness: 0.05,
          name: 'rubberBlack'
        }),
        cotBeige: new THREE.MeshStandardMaterial({
          color: 0xdcd0b8,
          roughness: 0.55,
          metalness: 0.10,
          name: 'cotBeige'
        }),
        yarnWhite: new THREE.MeshStandardMaterial({
          color: 0xfaf9f6,
          roughness: 0.92,
          metalness: 0.02,
          map: this.texYarnWound,
          name: 'yarnWhite'
        }),
        yarnThread: new THREE.MeshStandardMaterial({
          color: 0xffffff,
          roughness: 0.85,
          metalness: 0.0,
          name: 'yarnThread'
        }),
        capRed: new THREE.MeshStandardMaterial({
          color: 0xc92a2a,
          roughness: 0.28,
          metalness: 0.25,
          name: 'capRed'
        }),
        flangeGreen: new THREE.MeshStandardMaterial({
          color: 0x15803d,
          roughness: 0.28,
          metalness: 0.25,
          name: 'flangeGreen'
        }),
        polycarbonateShield: new THREE.MeshPhysicalMaterial({
          color: 0xe0f2fe,
          transparent: true,
          opacity: 0.35,
          roughness: 0.08,
          metalness: 0.1,
          clearcoat: 1.0,
          clearcoatRoughness: 0.1
        }),
        ledGreen: new THREE.MeshStandardMaterial({
          color: 0x10b981,
          emissive: 0x10b981,
          emissiveIntensity: 1.8,
          roughness: 0.2
        }),
        ledRed: new THREE.MeshStandardMaterial({
          color: 0xef4444,
          emissive: 0xef4444,
          emissiveIntensity: 2.2,
          roughness: 0.2
        }),
        displayScreen: new THREE.MeshBasicMaterial({
          color: 0x070f1e
        }),
        torqueVector: new THREE.MeshBasicMaterial({
          color: 0x0284c7,
          transparent: true,
          opacity: 0.85
        })
      };
    }

    initLighting() {
      const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
      this.scene.add(ambientLight);

      const mainSun = new THREE.DirectionalLight(0xffffff, 1.45);
      mainSun.position.set(5, 10, 6);
      mainSun.castShadow = true;
      mainSun.shadow.mapSize.width = 1024;
      mainSun.shadow.mapSize.height = 1024;
      mainSun.shadow.bias = -0.0004;
      this.scene.add(mainSun);

      const fillLight = new THREE.DirectionalLight(0xe0f2fe, 0.75);
      fillLight.position.set(-6, 6, -4);
      this.scene.add(fillLight);

      const warmAccent = new THREE.PointLight(0xf59e0b, 0.85, 10);
      warmAccent.position.set(3, -0.4, 3);
      this.scene.add(warmAccent);

      const cyanTech = new THREE.PointLight(0x0284c7, 0.7, 8);
      cyanTech.position.set(-2, 0.6, 2.5);
      this.scene.add(cyanTech);
    }

    initControls() {
      if (window.THREE && window.THREE.OrbitControls) {
        this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.08;
        this.controls.maxPolarAngle = Math.PI / 2 + 0.05;
        this.controls.minDistance = 1.6;
        this.controls.maxDistance = 9.0;
        this.controls.target.set(0, -0.15, 0);

        this.controls.addEventListener('start', () => {
          if (this.isCamTweening) this.isCamTweening = false;
        });
      }
    }

    buildCompleteCharkhaModel() {
      this.modelRoot = new THREE.Group();
      this.assemblies = {};

      const spindlePitch = 0.32;
      const startX = -((8 - 1) * spindlePitch) / 2; // -1.12 to +1.12

      // =========================================================================
      // 1. SUPPORTING FRAME & RIGID CHASSIS
      // (NOTE: The unwanted separate vertical rod marked in red has been completely removed)
      // =========================================================================
      this.grpChassis = new THREE.Group();
      this.grpChassis.userData = { compKey: 'chassis' };

      // 4 Telescopic A-frame Legs with Anti-Vibration Base Pads
      const legPositions = [
        { x: -1.35, z: 0.55, rotZ: 0.16, rotX: -0.12 },
        { x: 1.35, z: 0.55, rotZ: -0.16, rotX: -0.12 },
        { x: -1.35, z: -0.55, rotZ: 0.16, rotX: 0.12 },
        { x: 1.35, z: -0.55, rotZ: -0.16, rotX: 0.12 }
      ];

      legPositions.forEach(lp => {
        const legGrp = new THREE.Group();
        legGrp.position.set(lp.x * 0.78, -0.85, lp.z * 0.75);

        const legSleeve = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.85, 0.09), this.mat.frameMetal);
        legSleeve.rotation.z = lp.rotZ;
        legSleeve.rotation.x = lp.rotX;
        legSleeve.castShadow = true;
        legGrp.add(legSleeve);

        const strut = new THREE.Mesh(new THREE.BoxGeometry(0.075, 0.75, 0.075), this.mat.frameDark);
        strut.rotation.z = lp.rotZ;
        strut.rotation.x = lp.rotX;
        strut.position.set(lp.x > 0 ? 0.08 : -0.08, -0.42, lp.z > 0 ? 0.06 : -0.06);
        legGrp.add(strut);

        const foot = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.08, 0.14), this.mat.rubberBlack);
        foot.position.set(lp.x > 0 ? 0.16 : -0.16, -0.74, lp.z > 0 ? 0.12 : -0.12);
        legGrp.add(foot);

        this.grpChassis.add(legGrp);
      });

      // Front & Rear Horizontal Lower Cross Stretchers
      [-0.42, 0.42].forEach(z => {
        const cross = new THREE.Mesh(new THREE.BoxGeometry(2.35, 0.07, 0.07), this.mat.frameMetal);
        cross.position.set(0, -0.92, z);
        this.grpChassis.add(cross);
      });

      // 2 Vertical Upright Frame Columns (Cleaned: No separate thin vertical rods)
      [-1.32, 1.32].forEach(x => {
        const col = new THREE.Mesh(new THREE.BoxGeometry(0.10, 2.2, 0.38), this.mat.frameMetal);
        col.position.set(x, 0.1, 0);
        col.castShadow = true;
        this.grpChassis.add(col);
      });

      // Top Gantry Crossbar (Creel Mount)
      const topBridge = new THREE.Mesh(new THREE.BoxGeometry(2.8, 0.09, 0.32), this.mat.frameMetal);
      topBridge.position.set(0, 1.25, 0);
      topBridge.castShadow = true;
      this.grpChassis.add(topBridge);

      // Middle Drafting Support Beam (Solid mounting for the 8 drafting stations)
      const midBridge = new THREE.Mesh(new THREE.BoxGeometry(2.8, 0.08, 0.28), this.mat.frameMetal);
      midBridge.position.set(0, 0.12, 0);
      midBridge.castShadow = true;
      this.grpChassis.add(midBridge);

      // Lower Spindle Bed Beam (Solid mounting for the 8 spindles)
      const spindleBed = new THREE.Mesh(new THREE.BoxGeometry(2.8, 0.09, 0.34), this.mat.frameMetal);
      spindleBed.position.set(0, -0.68, 0.18);
      spindleBed.castShadow = true;
      this.grpChassis.add(spindleBed);

      // Base Footrest Pivot Shaft
      const footAxle = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 1.8, 16), this.mat.steelPolished);
      footAxle.rotation.z = Math.PI / 2;
      footAxle.position.set(0, -1.15, 0.36);
      this.grpChassis.add(footAxle);

      this.assemblies.chassis = this.grpChassis;
      this.modelRoot.add(this.grpChassis);

      // =========================================================================
      // 2. PRIMARY LEFT TRANSMISSION INPUT SHAFT & BEARING BLOCK
      // (NOTE: The unwanted long horizontal rotating rod across the central area has been completely deleted)
      // =========================================================================
      this.grpMainShaft = new THREE.Group();
      this.grpMainShaft.userData = { compKey: 'outputShaft' };

      // Left-Side Input Stub Shaft (Directly mounts hand crank, upper pulley, and drives gear train)
      const inputStubGeo = new THREE.CylinderGeometry(0.028, 0.028, 0.38, 20);
      this.meshInputStubShaft = new THREE.Mesh(inputStubGeo, this.mat.steelPolished);
      this.meshInputStubShaft.rotation.z = Math.PI / 2;
      this.meshInputStubShaft.position.set(-1.42, 0.28, 0.0);
      this.grpMainShaft.add(this.meshInputStubShaft);

      // Left Input Bearing Pillow Block mounted rigidly to the left frame column
      const leftInputBrg = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.14, 0.14), this.mat.brassGold);
      leftInputBrg.position.set(-1.32, 0.28, 0.0);
      this.grpMainShaft.add(leftInputBrg);

      // Slotted Optical Disk Encoder on left transmission hub for zero-drag RPM sensing
      const encoderDiskGeo = new THREE.CylinderGeometry(0.09, 0.09, 0.01, 32);
      this.meshEncoderDisk = new THREE.Mesh(encoderDiskGeo, this.mat.steelGunmetal);
      this.meshEncoderDisk.rotation.z = Math.PI / 2;
      this.meshEncoderDisk.position.set(-1.26, 0.28, 0.0);
      this.grpMainShaft.add(this.meshEncoderDisk);

      // Encoder Optical Sensor Transceiver Pickup Bracket
      const encoderPickup = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.07, 0.07), this.mat.frameDark);
      encoderPickup.position.set(-1.26, 0.36, 0.0);
      this.grpMainShaft.add(encoderPickup);

      this.assemblies.outputShaft = this.grpMainShaft;
      this.modelRoot.add(this.grpMainShaft);
      this.registerClickable(this.grpMainShaft, 'outputShaft');

      // =========================================================================
      // 3. 5-SPOKE HAND CRANK WHEEL & HANDLE (Left Side)
      // =========================================================================
      this.grpHandCrank = new THREE.Group();
      this.grpHandCrank.userData = { compKey: 'handCrank' };

      this.rotorHandCrank = new THREE.Group();
      this.rotorHandCrank.position.set(-1.62, 0.28, 0.0);

      // Outer Handwheel Rim
      const handRim = new THREE.Mesh(new THREE.TorusGeometry(0.52, 0.038, 16, 48), this.mat.steelGunmetal);
      handRim.rotation.y = Math.PI / 2;
      handRim.castShadow = true;
      this.rotorHandCrank.add(handRim);

      // 5 Curved Aerodynamic Spokes
      for (let i = 0; i < 5; i++) {
        const spoke = new THREE.Mesh(new THREE.CylinderGeometry(0.016, 0.022, 0.50, 12), this.mat.steelGunmetal);
        spoke.position.set(0, Math.cos((i * 2 * Math.PI) / 5) * 0.25, Math.sin((i * 2 * Math.PI) / 5) * 0.25);
        spoke.rotation.x = (i * 2 * Math.PI) / 5;
        this.rotorHandCrank.add(spoke);
      }

      // Handwheel Center Hub & Keyway
      const handHub = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 0.09, 24), this.mat.steelPolished);
      handHub.rotation.z = Math.PI / 2;
      this.rotorHandCrank.add(handHub);

      // Crank Arm & Revolving Ergonomic Handle Grip
      const crankArm = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.44, 0.04), this.mat.frameDark);
      crankArm.position.set(-0.06, 0.22, 0);
      this.rotorHandCrank.add(crankArm);

      const grip = new THREE.Mesh(new THREE.CylinderGeometry(0.034, 0.038, 0.22, 16), this.mat.rubberBlack);
      grip.rotation.z = Math.PI / 2;
      grip.position.set(-0.18, 0.42, 0);
      this.rotorHandCrank.add(grip);

      // Upper V-Belt Pulley (Solidly coupled on the same input hub)
      const upPulley = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.05, 24), this.mat.frameDark);
      upPulley.rotation.z = Math.PI / 2;
      upPulley.position.set(0.12, 0, 0);
      this.rotorHandCrank.add(upPulley);

      this.grpHandCrank.add(this.rotorHandCrank);
      this.assemblies.handCrank = this.grpHandCrank;
      this.modelRoot.add(this.grpHandCrank);
      this.registerClickable(this.rotorHandCrank, 'handCrank');

      // =========================================================================
      // 4. INERTIAL FLYWHEEL & DYNAMO HOUSING WITH V-BELT (In True Drive Path)
      // =========================================================================
      this.grpFlywheel = new THREE.Group();
      this.grpFlywheel.userData = { compKey: 'flywheel' };
      this.grpFlywheel.position.set(-1.42, -0.75, 0.0);

      // Industrial Vented Steel Enclosure Box
      const dynamoBox = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.48, 0.38), this.mat.frameMetal);
      dynamoBox.position.set(0.05, 0.0, 0.0);
      dynamoBox.castShadow = true;
      this.grpFlywheel.add(dynamoBox);

      // Dynamo Louvers / Cooling Slots
      for (let sl = -0.15; sl <= 0.15; sl += 0.06) {
        const slot = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.02, 0.24), this.mat.frameDark);
        slot.position.set(-0.15, sl, 0.0);
        this.grpFlywheel.add(slot);
      }

      // Rotating Flywheel Rotor (Mounted in-line in the transmission path)
      this.rotorFlywheel = new THREE.Group();
      this.rotorFlywheel.position.set(-0.16, 0.0, 0.0);

      // Heavy Precision-Balanced Cast Rim Flywheel
      const flyRim = new THREE.Mesh(new THREE.TorusGeometry(0.38, 0.055, 20, 48), this.mat.flywheelCast);
      flyRim.rotation.y = Math.PI / 2;
      flyRim.castShadow = true;
      this.rotorFlywheel.add(flyRim);

      // 6 Sturdy Cast Spokes
      for (let s = 0; s < 6; s++) {
        const spk = new THREE.Mesh(new THREE.BoxGeometry(0.024, 0.36, 0.034), this.mat.flywheelCast);
        spk.rotation.z = (s * Math.PI) / 3;
        this.rotorFlywheel.add(spk);
      }

      // Flywheel Hub & Locking Collars
      const flyHub = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.11, 0.09, 20), this.mat.steelPolished);
      flyHub.rotation.z = Math.PI / 2;
      this.rotorFlywheel.add(flyHub);

      // Lower Transmission Pulley
      const lowPulley = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.05, 24), this.mat.frameDark);
      lowPulley.rotation.z = Math.PI / 2;
      lowPulley.position.set(-0.06, 0.0, 0.0);
      this.rotorFlywheel.add(lowPulley);

      this.grpFlywheel.add(this.rotorFlywheel);

      // Heavy-duty V-Belt Coupling Upper Input Pulley to Lower Flywheel Shaft
      const beltCurve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(-1.50, 0.28, 0.0),
        new THREE.Vector3(-1.48, -0.25, 0.10),
        new THREE.Vector3(-1.48, -0.75, 0.0),
        new THREE.Vector3(-1.52, -0.25, -0.10)
      ], true);
      const beltGeo = new THREE.TubeGeometry(beltCurve, 32, 0.016, 8, true);
      this.meshDriveBelt = new THREE.Mesh(beltGeo, this.mat.rubberBlack);
      this.grpFlywheel.add(this.meshDriveBelt);

      this.assemblies.flywheel = this.grpFlywheel;
      this.modelRoot.add(this.grpFlywheel);
      this.registerClickable(this.rotorFlywheel, 'flywheel');

      // =========================================================================
      // 5. CENTRAL FOOT PEDAL TREADLE & ARTICULATED LINKAGE
      // =========================================================================
      this.grpFootPedal = new THREE.Group();
      this.grpFootPedal.userData = { compKey: 'footPedal' };
      this.grpFootPedal.position.set(0.0, -1.15, 0.36);

      // Pivoting Foot Treadle Frame
      this.treadlePivotGrp = new THREE.Group();

      // Foot Treadle Platform (6 Tubular Rungs)
      const treadleSide1 = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.06, 0.55), this.mat.frameMetal);
      treadleSide1.position.set(-0.35, -0.06, 0.28);
      this.treadlePivotGrp.add(treadleSide1);

      const treadleSide2 = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.06, 0.55), this.mat.frameMetal);
      treadleSide2.position.set(0.35, -0.06, 0.28);
      this.treadlePivotGrp.add(treadleSide2);

      for (let rg = 0; rg < 6; rg++) {
        const rung = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, 0.72, 14), this.mat.steelPolished);
        rung.rotation.z = Math.PI / 2;
        rung.position.set(0, -0.04, 0.08 + rg * 0.08);
        this.treadlePivotGrp.add(rung);
      }

      // Articulated Pushrod Linkage to Left Transmission Drive
      const pushRodGeo = new THREE.CylinderGeometry(0.016, 0.016, 0.72, 12);
      this.meshPushRod = new THREE.Mesh(pushRodGeo, this.mat.steelPolished);
      this.meshPushRod.position.set(-0.35, 0.36, -0.15);
      this.meshPushRod.rotation.x = 0.38;
      this.treadlePivotGrp.add(this.meshPushRod);

      // Eccentric Crank Throw on Left Drive Transmission
      this.crankThrowArm = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.16, 0.04), this.mat.frameDark);
      this.crankThrowArm.position.set(-0.35, 0.28, 0.0);
      this.grpMainShaft.add(this.crankThrowArm);

      this.grpFootPedal.add(this.treadlePivotGrp);
      this.assemblies.footPedal = this.grpFootPedal;
      this.modelRoot.add(this.grpFootPedal);
      this.registerClickable(this.grpFootPedal, 'footPedal');

      // =========================================================================
      // 6. LEFT-SIDE STEP-UP SPUR GEAR TRAIN & CLEAR SAFETY GUARD
      // =========================================================================
      this.grpGearTrain = new THREE.Group();
      this.grpGearTrain.userData = { compKey: 'gearTrain' };
      this.grpGearTrain.position.set(-1.38, 0.12, 0.0);

      // Transparent Polycarbonate Guard Shield
      const guardShield = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.95, 0.65), this.mat.polycarbonateShield);
      guardShield.position.set(-0.16, 0.08, 0.0);
      this.grpGearTrain.add(guardShield);

      // Chrome Guard Standoffs
      [[-0.35, -0.25], [-0.35, 0.25], [0.45, -0.25], [0.45, 0.25]].forEach(pt => {
        const st = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.14, 12), this.mat.steelPolished);
        st.rotation.z = Math.PI / 2;
        st.position.set(-0.08, pt[0], pt[1]);
        this.grpGearTrain.add(st);
      });

      // Gear 1: Primary Input Spur Gear (Z=48)
      this.rotorGear1 = new THREE.Group();
      this.rotorGear1.position.set(0, 0.16, 0.0);
      const g1Mesh = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.24, 0.05, 32), this.mat.steelGunmetal);
      g1Mesh.rotation.z = Math.PI / 2;
      this.rotorGear1.add(g1Mesh);
      for (let t = 0; t < 16; t++) {
        const tooth = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.02, 0.024), this.mat.brassGold);
        tooth.position.set(0, Math.cos((t * Math.PI) / 8) * 0.25, Math.sin((t * Math.PI) / 8) * 0.25);
        this.rotorGear1.add(tooth);
      }
      this.grpGearTrain.add(this.rotorGear1);

      // Gear 2: Intermediate Multiplier Compound Cluster Gear (Z=24 / Z=60)
      this.rotorGear2 = new THREE.Group();
      this.rotorGear2.position.set(0, -0.15, -0.12);
      const g2Mesh = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.05, 24), this.mat.brassGold);
      g2Mesh.rotation.z = Math.PI / 2;
      this.rotorGear2.add(g2Mesh);
      this.grpGearTrain.add(this.rotorGear2);

      // Gear 3: Spindle Output Drive Pinion (Z=20)
      this.rotorGear3 = new THREE.Group();
      this.rotorGear3.position.set(0, -0.42, 0.0);
      const g3Mesh = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.14, 0.05, 20), this.mat.steelGunmetal);
      g3Mesh.rotation.z = Math.PI / 2;
      this.rotorGear3.add(g3Mesh);
      this.grpGearTrain.add(this.rotorGear3);

      this.assemblies.gearTrain = this.grpGearTrain;
      this.modelRoot.add(this.grpGearTrain);
      this.registerClickable(this.grpGearTrain, 'gearTrain');

      // =========================================================================
      // 7. HORIZONTAL DRAFTING SYSTEM (Middle Zone - Clean Individual Units)
      // =========================================================================
      this.grpDrafting = new THREE.Group();
      this.grpDrafting.userData = { compKey: 'rollers' };

      // 8 Precision Drafting Stations with Synthetic Rubber Cots & Steel Fluted Rollers
      this.draftingRollers = [];
      for (let i = 0; i < 8; i++) {
        const sx = startX + i * spindlePitch;

        // Cast Drafting Arm Bracket solidly mounted to the middle beam
        const arm = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.36, 0.12), this.mat.frameDark);
        arm.position.set(sx, 0.18, 0.14);
        arm.rotation.x = 0.20;
        this.grpDrafting.add(arm);

        // Top Knurled Brass Tension Knob
        const knob = new THREE.Mesh(new THREE.CylinderGeometry(0.030, 0.030, 0.045, 16), this.mat.brassGold);
        knob.position.set(sx, 0.36, 0.10);
        this.grpDrafting.add(knob);

        // Upper Drafting Rubber Cot (Beige)
        const roller = new THREE.Mesh(new THREE.CylinderGeometry(0.048, 0.048, 0.14, 18), this.mat.cotBeige);
        roller.rotation.z = Math.PI / 2;
        roller.position.set(sx, 0.14, 0.16);
        roller.castShadow = true;
        this.grpDrafting.add(roller);
        this.draftingRollers.push(roller);

        // Lower Steel Fluted Roller
        const fluted = new THREE.Mesh(new THREE.CylinderGeometry(0.038, 0.038, 0.14, 18), this.mat.steelPolished);
        fluted.rotation.z = Math.PI / 2;
        fluted.position.set(sx, 0.04, 0.16);
        this.grpDrafting.add(fluted);
      }

      // 8 Overhead Cotton Roving Spools on Top Creel Gantry
      this.topRovingSpools = [];
      for (let i = 0; i < 8; i++) {
        const sx = startX + i * spindlePitch;
        const spoolZ = -0.05;

        // Vertical Creel Pin
        const peg = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.55, 12), this.mat.steelPolished);
        peg.position.set(sx, 0.95, spoolZ);
        this.grpDrafting.add(peg);

        // Crimson Top Locking Tension Cap
        const topCap = new THREE.Mesh(new THREE.CylinderGeometry(0.038, 0.038, 0.06, 16), this.mat.capRed);
        topCap.position.set(sx, 1.22, spoolZ);
        this.grpDrafting.add(topCap);

        // Top Optical Tension Sensor Block
        const tenSensor = new THREE.Mesh(new THREE.BoxGeometry(0.045, 0.05, 0.045), this.mat.frameDark);
        tenSensor.position.set(sx, 1.30, spoolZ);
        this.grpDrafting.add(tenSensor);

        const tenLED = new THREE.Mesh(new THREE.SphereGeometry(0.018, 12, 12), this.mat.ledGreen);
        tenLED.position.set(sx, 1.30, spoolZ + 0.03);
        this.grpDrafting.add(tenLED);

        // Large Cotton Roving Bobbin
        const roving = new THREE.Mesh(new THREE.CylinderGeometry(0.082, 0.096, 0.44, 24), this.mat.yarnWhite);
        roving.position.set(sx, 0.94, spoolZ);
        roving.castShadow = true;
        this.grpDrafting.add(roving);
        this.topRovingSpools.push(roving);
      }

      this.assemblies.drafting = this.grpDrafting;
      this.modelRoot.add(this.grpDrafting);
      this.registerClickable(this.grpDrafting, 'rollers');

      // =========================================================================
      // 8. 8-SPINDLE SYNCHRONIZED SPINNING ARRAY
      // =========================================================================
      this.grpSpindles = new THREE.Group();
      this.grpSpindles.userData = { compKey: 'spindles' };

      this.spindleRotors = [];
      this.spindleYarnLines = [];
      this.spindleSensorLEDs = [];

      for (let i = 0; i < 8; i++) {
        const sx = startX + i * spindlePitch;
        const spindleGrp = new THREE.Group();
        spindleGrp.position.set(sx, -0.68, 0.26);

        // High-Speed Ground Spindle Blade
        const blade = new THREE.Mesh(new THREE.CylinderGeometry(0.010, 0.010, 0.78, 14), this.mat.steelPolished);
        spindleGrp.add(blade);

        // Emerald Green Base Whorl Collar
        const flange = new THREE.Mesh(new THREE.CylinderGeometry(0.065, 0.065, 0.035, 20), this.mat.flangeGreen);
        flange.position.set(0, -0.22, 0);
        spindleGrp.add(flange);

        // Wound Khadi Yarn Cop / Bobbin
        const cop = new THREE.Mesh(new THREE.CylinderGeometry(0.048, 0.062, 0.44, 20), this.mat.yarnWhite);
        cop.position.set(0, 0.04, 0);
        cop.castShadow = true;
        spindleGrp.add(cop);

        // Top Conical Tip
        const tip = new THREE.Mesh(new THREE.ConeGeometry(0.036, 0.08, 16), this.mat.steelPolished);
        tip.position.set(0, 0.32, 0);
        spindleGrp.add(tip);

        // Continuous Yarn Delivery Line: Top Roving -> Drafting -> IR Sensor -> Eyelet -> Spindle
        const yarnCurve = new THREE.CatmullRomCurve3([
          new THREE.Vector3(sx, 0.72, -0.05),
          new THREE.Vector3(sx, 0.14, 0.16),
          new THREE.Vector3(sx, -0.15, 0.28),
          new THREE.Vector3(sx, -0.32, 0.26)
        ]);
        const yarnMesh = new THREE.Mesh(new THREE.TubeGeometry(yarnCurve, 16, 0.005, 6, false), this.mat.yarnThread);
        this.grpSpindles.add(yarnMesh);
        this.spindleYarnLines.push(yarnMesh);

        // Wire Pigtail Guide Eyelet
        const eyelet = new THREE.Mesh(new THREE.TorusGeometry(0.018, 0.004, 8, 16), this.mat.brassGold);
        eyelet.position.set(sx, -0.28, 0.26);
        this.grpSpindles.add(eyelet);

        // Individual IR Optical Yarn Sensor & Dual-Color Status LED
        const sensorBox = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.04, 0.04), this.mat.frameDark);
        sensorBox.position.set(sx, -0.15, 0.28);
        this.grpSpindles.add(sensorBox);

        const sLED = new THREE.Mesh(new THREE.SphereGeometry(0.016, 12, 12), this.mat.ledGreen);
        sLED.position.set(sx, -0.15, 0.31);
        this.grpSpindles.add(sLED);
        this.spindleSensorLEDs.push(sLED);

        this.grpSpindles.add(spindleGrp);
        this.spindleRotors.push(spindleGrp);
      }

      this.assemblies.spindles = this.grpSpindles;
      this.modelRoot.add(this.grpSpindles);
      this.registerClickable(this.grpSpindles, 'spindles');

      // =========================================================================
      // 9. SMART TELEMETRY CONSOLE & GRAPHICAL LCD DISPLAY (Right Side)
      // =========================================================================
      this.grpSensors = new THREE.Group();
      this.grpSensors.userData = { compKey: 'display' };
      this.grpSensors.position.set(1.48, 0.35, 0.0);

      // Industrial Telemetry Enclosure Box
      const consoleBox = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.82, 0.72), this.mat.frameMetal);
      consoleBox.castShadow = true;
      this.grpSensors.add(consoleBox);

      // Color LCD Graphical Screen Frame
      const screenBezel = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.46, 0.54), this.mat.frameDark);
      screenBezel.position.set(0.18, 0.12, 0.0);
      this.grpSensors.add(screenBezel);

      // LCD Canvas Texture Screen
      this.meshDisplayScreen = new THREE.Mesh(new THREE.PlaneGeometry(0.50, 0.42), this.mat.displayScreen);
      this.meshDisplayScreen.rotation.y = Math.PI / 2;
      this.meshDisplayScreen.position.set(0.20, 0.12, 0.0);
      this.grpSensors.add(this.meshDisplayScreen);

      // Console Green Push Button
      const btnGreen = new THREE.Mesh(new THREE.CylinderGeometry(0.028, 0.028, 0.03, 16), this.mat.ledGreen);
      btnGreen.rotation.z = Math.PI / 2;
      btnGreen.position.set(0.18, -0.22, -0.16);
      this.grpSensors.add(btnGreen);

      // Console Red Push Button
      const btnRed = new THREE.Mesh(new THREE.CylinderGeometry(0.028, 0.028, 0.03, 16), this.mat.ledRed);
      btnRed.rotation.z = Math.PI / 2;
      btnRed.position.set(0.18, -0.22, -0.05);
      this.grpSensors.add(btnRed);

      // Acoustic Buzzer Port with Sound Grill
      const buzzer = new THREE.Mesh(new THREE.CylinderGeometry(0.048, 0.048, 0.03, 20), this.mat.frameDark);
      buzzer.rotation.z = Math.PI / 2;
      buzzer.position.set(0.18, -0.22, 0.15);
      this.grpSensors.add(buzzer);

      // Main Physical Console Status LED
      this.meshStatusLED = new THREE.Mesh(new THREE.SphereGeometry(0.032, 16, 16), this.mat.ledGreen);
      this.meshStatusLED.position.set(0.18, -0.12, -0.16);
      this.grpSensors.add(this.meshStatusLED);

      this.assemblies.sensors = this.grpSensors;
      this.assemblies.display = this.grpSensors;
      this.modelRoot.add(this.grpSensors);
      this.registerClickable(this.grpSensors, 'display');
      this.registerClickable(this.meshStatusLED, 'led');

      this.scene.add(this.modelRoot);
    }

    initTorqueFlowVisualization() {
      // Clean Mechanical Torque Transmission Rings along genuine drive path:
      // (Hand Crank -> Input Stub -> Flywheel Belt -> Gear Train -> Spindles)
      this.grpTorqueVectors = new THREE.Group();
      this.torqueRings = [];

      const ringPositions = [
        { x: -1.60, y: 0.28, z: 0.0, r: 0.06 },   // Hand Crank Input Hub
        { x: -1.42, y: 0.28, z: 0.0, r: 0.06 },   // Input Stub Shaft
        { x: -1.42, y: -0.75, z: 0.0, r: 0.15 },  // Flywheel Drive Axle
        { x: -1.38, y: 0.16, z: 0.0, r: 0.25 },   // Gear 1 Pitch Line
        { x: -1.38, y: -0.15, z: -0.12, r: 0.19 },// Gear 2 Cluster Line
        { x: -1.38, y: -0.42, z: 0.0, r: 0.15 }   // Gear 3 Pinion Line
      ];

      ringPositions.forEach(rp => {
        const ringGeo = new THREE.TorusGeometry(rp.r, 0.008, 8, 24);
        const ringMesh = new THREE.Mesh(ringGeo, this.mat.torqueVector);
        ringMesh.position.set(rp.x, rp.y, rp.z);
        ringMesh.rotation.y = Math.PI / 2;
        this.grpTorqueVectors.add(ringMesh);
        this.torqueRings.push(ringMesh);
      });

      this.grpTorqueVectors.visible = false;
      this.scene.add(this.grpTorqueVectors);
    }

    registerClickable(obj, key) {
      obj.traverse(child => {
        if (child.isMesh) {
          child.userData = child.userData || {};
          child.userData.compKey = key;
          this.clickableMeshes.push(child);
        }
      });
    }

    initCanvasDisplay() {
      this.displayCanvas = document.createElement('canvas');
      this.displayCanvas.width = 512;
      this.displayCanvas.height = 420;
      this.displayCtx = this.displayCanvas.getContext('2d');

      this.displayTexture = new THREE.CanvasTexture(this.displayCanvas);
      this.displayTexture.minFilter = THREE.LinearFilter;
      this.mat.displayScreen.map = this.displayTexture;
      this.mat.displayScreen.needsUpdate = true;

      this.updateDisplayCanvas();
    }

    updateDisplayCanvas() {
      if (!this.displayCtx) return;
      const ctx = this.displayCtx;
      const w = 512;
      const h = 420;

      // Dark Backlit LCD Matrix Background
      ctx.fillStyle = '#051124';
      ctx.fillRect(0, 0, w, h);

      // Top Header Bar
      ctx.fillStyle = '#0b213f';
      ctx.fillRect(0, 0, w, 52);

      ctx.fillStyle = '#38bdf8';
      ctx.font = 'bold 18px "JetBrains Mono", monospace';
      ctx.fillText('SMART KHADHI CHAKRA', 16, 32);

      if (this.isBreakSimulated) {
        ctx.fillStyle = '#ef4444';
        ctx.font = 'bold 16px "JetBrains Mono", monospace';
        ctx.fillText('● BREAK ON #04', 330, 32);
      } else {
        ctx.fillStyle = '#10b981';
        ctx.font = 'bold 16px "JetBrains Mono", monospace';
        ctx.fillText('● RUNNING 100%', 330, 32);
      }

      if (this.isBreakSimulated) {
        // High-Visibility Red Alert Screen matching reference
        ctx.fillStyle = '#991b1b';
        ctx.fillRect(16, 68, w - 32, 190);

        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 28px "JetBrains Mono", monospace';
        ctx.textAlign = 'center';
        ctx.fillText('SPINDLE #4', w / 2, 130);
        ctx.fillText('YARN BREAK DETECTED', w / 2, 175);
        ctx.font = 'bold 18px "JetBrains Mono", monospace';
        ctx.fillStyle = '#fecaca';
        ctx.fillText('AUTO-TELEMETRY ALERT • BUZZER ACTIVE', w / 2, 220);
        ctx.textAlign = 'left';
      } else {
        // Normal Telemetry Display
        // RPM Readout
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 44px "JetBrains Mono", monospace';
        const curRpmStr = Math.round(this.rpmVal).toString().padStart(3, '0');
        ctx.fillText(curRpmStr, 20, 120);
        ctx.font = 'bold 20px "JetBrains Mono", monospace';
        ctx.fillStyle = '#38bdf8';
        ctx.fillText('RPM', 118, 120);

        ctx.fillStyle = '#94a3b8';
        ctx.font = '13px "Plus Jakarta Sans", sans-serif';
        ctx.fillText('SPINDLE SPEED', 20, 145);

        // Spindles Active Count
        ctx.fillStyle = '#10b981';
        ctx.font = 'bold 42px "JetBrains Mono", monospace';
        ctx.fillText('8 / 8', 270, 120);
        ctx.font = 'bold 20px "JetBrains Mono", monospace';
        ctx.fillStyle = '#f59e0b';
        ctx.fillText('SPINDLES', 388, 120);

        ctx.fillStyle = '#94a3b8';
        ctx.font = '13px "Plus Jakarta Sans", sans-serif';
        ctx.fillText('SYNCHRONIZED ARRAY', 270, 145);

        // Divider
        ctx.strokeStyle = '#1e293b';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(16, 170);
        ctx.lineTo(w - 16, 170);
        ctx.stroke();

        // Tension & Battery Level
        ctx.fillStyle = '#10b981';
        ctx.font = 'bold 26px "JetBrains Mono", monospace';
        ctx.fillText('OPTIMAL', 20, 215);
        ctx.fillStyle = '#94a3b8';
        ctx.font = '13px "Plus Jakarta Sans", sans-serif';
        ctx.fillText('YARN TENSION', 20, 238);

        ctx.fillStyle = '#38bdf8';
        ctx.font = 'bold 26px "JetBrains Mono", monospace';
        ctx.fillText('78% 🔋', 270, 215);
        ctx.fillStyle = '#94a3b8';
        ctx.font = '13px "Plus Jakarta Sans", sans-serif';
        ctx.fillText('SELF-POWERED STORAGE', 270, 238);
      }

      // Bottom 8 Spindle Live Health Bar
      ctx.fillStyle = '#0b213f';
      ctx.fillRect(0, 275, w, 145);

      ctx.fillStyle = '#cbd5e1';
      ctx.font = 'bold 14px "JetBrains Mono", monospace';
      ctx.fillText('8-SPINDLE CHANNEL TELEMETRY:', 18, 305);

      for (let si = 0; si < 8; si++) {
        const bx = 18 + si * 60;
        const isSp4Break = this.isBreakSimulated && si === 3;

        ctx.fillStyle = isSp4Break ? '#ef4444' : '#10b981';
        ctx.fillRect(bx, 320, 48, 22);

        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 12px "JetBrains Mono", monospace';
        ctx.fillText(`#0${si + 1}`, bx + 10, 336);

        ctx.fillStyle = isSp4Break ? '#fca5a5' : '#86efac';
        ctx.font = '10px "JetBrains Mono", monospace';
        ctx.fillText(isSp4Break ? 'BREAK' : 'OK', bx + 12, 358);
      }

      ctx.fillStyle = '#38bdf8';
      ctx.font = '12px "JetBrains Mono", monospace';
      ctx.fillText(`TOTAL: ${this.yarnMeters.toFixed(1)} m | TWIST: 22 TPI | COUNT: 40s Ne`, 18, 395);

      this.displayTexture.needsUpdate = true;
    }

    initEventListeners() {
      const dom = this.renderer.domElement;
      dom.addEventListener('pointerdown', (e) => {
        const rect = dom.getBoundingClientRect();
        this.mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        this.mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

        this.raycaster.setFromCamera(this.mouse, this.camera);
        const intersects = this.raycaster.intersectObjects(this.clickableMeshes, true);

        if (intersects.length > 0) {
          const compKey = intersects[0].object.userData.compKey;
          if (compKey && COMPONENT_CATALOG[compKey]) {
            this.inspectComponent(compKey);
          }
        }
      });
    }

    inspectComponent(key) {
      const info = COMPONENT_CATALOG[key];
      if (!info) return;

      this.selectedComponentKey = key;

      if (typeof window.onHeroCharkhaInspect === 'function') {
        window.onHeroCharkhaInspect(info);
      }

      if (info.camPos && info.camTarget) {
        this.tweenCamera(info.camPos, info.camTarget, 1000);
      }
    }

    resetView() {
      this.selectedComponentKey = null;
      this.isAutoDemo = false;
      if (this.autoDemoTimer) clearTimeout(this.autoDemoTimer);

      this.tweenCamera({ x: 2.8, y: 1.1, z: 3.6 }, { x: 0.0, y: -0.15, z: 0.0 }, 1000);

      if (typeof window.onHeroCharkhaInspectClosed === 'function') {
        window.onHeroCharkhaInspectClosed();
      }
    }

    restartSimulation() {
      this.rotAngle = 0;
      this.pedalAngle = 0;
      this.yarnMeters = 0.0;
      this.rpmVal = 0;
      this.targetRpm = 650;
      this.isRunning = true;
      this.resetYarnBreak();
      this.resetView();
      this.updateDisplayCanvas();
    }

    tweenCamera(targetPos, targetLookAt, duration = 1200) {
      this.isCamTweening = true;
      this.camPosTarget.set(targetPos.x, targetPos.y, targetPos.z);
      this.camTargetLookAt.set(targetLookAt.x, targetLookAt.y, targetLookAt.z);
      this.camTweenStartTime = performance.now();
      this.camTweenDuration = duration;
      this.camPosStart = this.camera.position.clone();
      this.camLookAtStart = this.controls ? this.controls.target.clone() : new THREE.Vector3(0, 0, 0);
    }

    togglePlayPause() {
      this.isRunning = !this.isRunning;
      this.targetRpm = this.isRunning ? 650 : 0;
      return this.isRunning;
    }

    toggleExplodedView() {
      this.isExploded = !this.isExploded;
      this.targetExplodedFactor = this.isExploded ? 1.0 : 0.0;
      return this.isExploded;
    }

    toggleTorqueFlow() {
      this.showTorqueFlow = !this.showTorqueFlow;
      if (this.grpTorqueVectors) this.grpTorqueVectors.visible = this.showTorqueFlow;
      return this.showTorqueFlow;
    }

    setDriveMode(mode) {
      this.inputDriveMode = mode;
      return this.inputDriveMode;
    }

    simulateYarnBreak() {
      this.isBreakSimulated = true;
      if (this.meshStatusLED) this.meshStatusLED.material = this.mat.ledRed;
      if (this.spindleYarnLines[3]) this.spindleYarnLines[3].visible = false;
      if (this.spindleSensorLEDs[3]) this.spindleSensorLEDs[3].material = this.mat.ledRed;

      this.updateDisplayCanvas();

      if (this.breakTimeout) clearTimeout(this.breakTimeout);
      this.breakTimeout = setTimeout(() => {
        this.resetYarnBreak();
      }, 7000);
    }

    resetYarnBreak() {
      this.isBreakSimulated = false;
      if (this.meshStatusLED) this.meshStatusLED.material = this.mat.ledGreen;
      if (this.spindleYarnLines[3]) this.spindleYarnLines[3].visible = true;
      if (this.spindleSensorLEDs[3]) this.spindleSensorLEDs[3].material = this.mat.ledGreen;
      this.updateDisplayCanvas();
    }

    startAutoDemo() {
      this.isAutoDemo = true;
      this.currentDemoStep = 0;
      this.executeDemoStep(0);
    }

    executeDemoStep(idx) {
      if (!this.isAutoDemo) return;
      if (idx >= HERO_DEMO_STEPS.length) {
        idx = 0;
      }

      this.currentDemoStep = idx;
      const step = HERO_DEMO_STEPS[idx];

      if (step.mode) this.inputDriveMode = step.mode;
      if (typeof step.rpm === 'number') this.targetRpm = step.rpm;

      if (step.breakTest) {
        this.simulateYarnBreak();
      } else if (this.isBreakSimulated) {
        this.resetYarnBreak();
      }

      this.tweenCamera(step.camPos, step.camTarget, 1200);

      if (typeof window.onHeroAutoDemoStep === 'function') {
        window.onHeroAutoDemoStep(step, idx, HERO_DEMO_STEPS.length);
      }

      if (this.autoDemoTimer) clearTimeout(this.autoDemoTimer);
      this.autoDemoTimer = setTimeout(() => {
        if (this.isAutoDemo) {
          this.executeDemoStep(idx + 1);
        }
      }, step.duration || 5200);
    }

    stopAutoDemo() {
      this.isAutoDemo = false;
      if (this.autoDemoTimer) clearTimeout(this.autoDemoTimer);
      if (typeof window.onHeroAutoDemoStopped === 'function') {
        window.onHeroAutoDemoStopped();
      }
    }

    animate(now) {
      requestAnimationFrame(this.animate);

      const deltaSec = Math.min((now - this.lastTimestamp) / 1000, 0.1);
      this.lastTimestamp = now;

      // Exploded View smooth interpolation
      this.explodedFactor += (this.targetExplodedFactor - this.explodedFactor) * (deltaSec * 4.0);
      if (this.assemblies) {
        const ef = this.explodedFactor;
        if (this.assemblies.handCrank) this.assemblies.handCrank.position.x = -ef * 0.75;
        if (this.assemblies.flywheel) {
          this.assemblies.flywheel.position.x = -1.42 - ef * 0.65;
          this.assemblies.flywheel.position.y = -0.75 - ef * 0.3;
        }
        if (this.assemblies.gearTrain) this.assemblies.gearTrain.position.x = -1.38 - ef * 0.55;
        if (this.assemblies.drafting) this.assemblies.drafting.position.y = ef * 0.65;
        if (this.assemblies.spindles) this.assemblies.spindles.position.z = ef * 0.55;
        if (this.assemblies.sensors) this.assemblies.sensors.position.x = 1.48 + ef * 0.75;
        if (this.assemblies.footPedal) {
          this.assemblies.footPedal.position.y = -1.15 - ef * 0.45;
          this.assemblies.footPedal.position.z = 0.36 + ef * 0.4;
        }
      }

      // Smooth Flywheel Inertia Acceleration / Deceleration
      this.rpmVal += (this.targetRpm - this.rpmVal) * (deltaSec * 2.8);

      const rotSpeed = (this.rpmVal / 60) * (Math.PI * 2) * deltaSec;

      if (this.rpmVal > 2) {
        this.rotAngle += rotSpeed;
        this.pedalAngle += rotSpeed * 0.75;
        this.yarnMeters += (this.rpmVal / 650) * 0.08 * deltaSec;
        this.yarnTextureOffset = (this.yarnTextureOffset + deltaSec * 0.45) % 1;

        if (this.texYarnWound) {
          this.texYarnWound.offset.y = this.yarnTextureOffset;
        }

        // 1. Hand Crank, Left Input Stub & Flywheel Rotation
        if (this.rotorHandCrank) this.rotorHandCrank.rotation.x = -this.rotAngle;
        if (this.rotorFlywheel) this.rotorFlywheel.rotation.x = -this.rotAngle * 1.6;
        if (this.meshInputStubShaft) this.meshInputStubShaft.rotation.y = -this.rotAngle;
        if (this.meshEncoderDisk) this.meshEncoderDisk.rotation.y = -this.rotAngle;

        // 2. Spur Gear Train Rotation
        if (this.rotorGear1) this.rotorGear1.rotation.x = -this.rotAngle;
        if (this.rotorGear2) this.rotorGear2.rotation.x = this.rotAngle * 2.0;
        if (this.rotorGear3) this.rotorGear3.rotation.x = -this.rotAngle * 3.6;

        // 3. Drafting Rollers Rotation
        if (this.draftingRollers) {
          this.draftingRollers.forEach(roller => {
            roller.rotation.x = -this.rotAngle * 1.4;
          });
        }

        // 4. 8 Synchronized High-Speed Spindles (1:10.8 Multiplied Angular Velocity)
        if (this.spindleRotors) {
          const spindleRotSpeed = this.rotAngle * 10.8;
          this.spindleRotors.forEach(sp => {
            sp.rotation.y = spindleRotSpeed;
          });
        }

        // 5. Foot Treadle Reciprocating Linkage & Eccentric Crank Throw
        if (this.treadlePivotGrp) {
          const treadleStroke = Math.sin(this.pedalAngle) * 0.07;
          this.treadlePivotGrp.rotation.x = treadleStroke;
          if (this.meshPushRod) {
            this.meshPushRod.rotation.z = Math.sin(this.pedalAngle) * 0.06;
          }
        }
        if (this.crankThrowArm) {
          this.crankThrowArm.rotation.x = -this.rotAngle;
        }

        this.updateDisplayCanvas();
      }

      this.pulsePhase += deltaSec * 3.5;

      // Flashing Red Alert on Break
      if (this.isBreakSimulated) {
        const isFlashOn = Math.sin(this.pulsePhase * 4) > 0;
        if (this.meshStatusLED) {
          this.meshStatusLED.material = isFlashOn ? this.mat.ledRed : this.mat.frameDark;
        }
        if (this.spindleSensorLEDs[3]) {
          this.spindleSensorLEDs[3].material = isFlashOn ? this.mat.ledRed : this.mat.frameDark;
        }
      }

      // Torque flow rings pulsation
      if (this.showTorqueFlow && this.torqueRings) {
        this.torqueFlowPhase += deltaSec * 4.0;
        this.torqueRings.forEach((ring, idx) => {
          ring.rotation.x = -this.rotAngle * (1 + (idx % 3));
          ring.material.opacity = 0.6 + Math.sin(this.torqueFlowPhase + idx * 0.4) * 0.3;
        });
      }

      // Camera Tweening
      if (this.isCamTweening) {
        const elapsed = now - this.camTweenStartTime;
        const progress = Math.min(elapsed / this.camTweenDuration, 1.0);
        const ease = 0.5 - Math.cos(progress * Math.PI) / 2;

        this.camera.position.lerpVectors(this.camPosStart, this.camPosTarget, ease);
        if (this.controls) {
          this.controls.target.lerpVectors(this.camLookAtStart, this.camTargetLookAt, ease);
        }

        if (progress >= 1.0) {
          this.isCamTweening = false;
        }
      }

      if (this.controls) {
        this.controls.update();
      }

      this.renderer.render(this.scene, this.camera);
    }
  }

  // --- HERO 3D UI BINDING CONTROLLER ---
  function bindHeroUI(engine) {
    // Play / Pause Toggle
    const btnPlayPause = document.getElementById('heroBtnPlayPause');
    if (btnPlayPause) {
      btnPlayPause.addEventListener('click', () => {
        const isRunning = engine.togglePlayPause();
        btnPlayPause.innerHTML = isRunning ? '<span>⏸</span> PAUSE' : '<span>▶</span> START';
        btnPlayPause.classList.toggle('btn-active', !isRunning);
      });
    }

    // Restart Button
    const btnRestart = document.getElementById('heroBtnRestart');
    if (btnRestart) {
      btnRestart.addEventListener('click', () => {
        engine.restartSimulation();
        if (btnPlayPause) btnPlayPause.innerHTML = '<span>⏸</span> PAUSE';
      });
    }

    // Exploded View Button
    const btnExploded = document.getElementById('heroBtnExploded');
    if (btnExploded) {
      btnExploded.addEventListener('click', () => {
        const isExpl = engine.toggleExplodedView();
        btnExploded.classList.toggle('btn-active', isExpl);
      });
    }

    // Torque Flow Button
    const btnMechFlow = document.getElementById('heroBtnMechFlow');
    if (btnMechFlow) {
      btnMechFlow.addEventListener('click', () => {
        const active = engine.toggleTorqueFlow();
        btnMechFlow.classList.toggle('btn-active', active);
      });
    }

    // Reset View Button
    const btnResetView = document.getElementById('heroBtnResetView');
    if (btnResetView) {
      btnResetView.addEventListener('click', () => {
        engine.resetView();
        const exploreMenu = document.getElementById('heroQuickExploreMenu');
        if (exploreMenu) exploreMenu.classList.remove('active');
        const btnExplore = document.getElementById('heroBtnExplore');
        if (btnExplore) btnExplore.classList.remove('btn-active');
      });
    }

    // Hotspot Explorer Menu Toggle
    const btnExplore = document.getElementById('heroBtnExplore');
    const exploreMenu = document.getElementById('heroQuickExploreMenu');
    if (btnExplore && exploreMenu) {
      btnExplore.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = exploreMenu.classList.toggle('active');
        btnExplore.classList.toggle('btn-active', isOpen);
      });

      document.addEventListener('click', (e) => {
        if (!exploreMenu.contains(e.target) && e.target !== btnExplore) {
          exploreMenu.classList.remove('active');
          btnExplore.classList.remove('btn-active');
        }
      });
    }

    // Hotspot Chips Click Handler
    document.querySelectorAll('.hero-explore-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const compKey = chip.getAttribute('data-comp');
        if (compKey) {
          engine.inspectComponent(compKey);
          if (exploreMenu) exploreMenu.classList.remove('active');
          if (btnExplore) btnExplore.classList.remove('btn-active');
        }
      });
    });

    // Yarn Break Simulation
    const btnBreakTest = document.getElementById('heroBtnBreakTest');
    if (btnBreakTest) {
      btnBreakTest.addEventListener('click', () => {
        engine.simulateYarnBreak();
        btnBreakTest.classList.add('btn-active');
        setTimeout(() => {
          btnBreakTest.classList.remove('btn-active');
        }, 7000);
      });
    }

    // 10-Step Guided Flow Auto-Demo
    const btnAutoDemo = document.getElementById('heroBtnAutoDemo');
    const demoOverlay = document.getElementById('heroDemoOverlay');
    if (btnAutoDemo) {
      btnAutoDemo.addEventListener('click', () => {
        if (engine.isAutoDemo) {
          engine.stopAutoDemo();
        } else {
          engine.startAutoDemo();
        }
      });
    }

    // Guided Mode Navigation
    const btnDemoStop = document.getElementById('heroDemoStopBtn');
    const btnDemoPrev = document.getElementById('heroDemoPrevBtn');
    const btnDemoNext = document.getElementById('heroDemoNextBtn');

    if (btnDemoStop) {
      btnDemoStop.addEventListener('click', () => {
        engine.stopAutoDemo();
      });
    }

    if (btnDemoPrev) {
      btnDemoPrev.addEventListener('click', () => {
        if (engine.isAutoDemo) {
          const prevIdx = (engine.currentDemoStep - 1 + HERO_DEMO_STEPS.length) % HERO_DEMO_STEPS.length;
          engine.executeDemoStep(prevIdx);
        }
      });
    }

    if (btnDemoNext) {
      btnDemoNext.addEventListener('click', () => {
        if (engine.isAutoDemo) {
          const nextIdx = (engine.currentDemoStep + 1) % HERO_DEMO_STEPS.length;
          engine.executeDemoStep(nextIdx);
        }
      });
    }

    // Drive Mode Buttons
    const btnModeCrank = document.getElementById('heroModeCrank');
    const btnModePedal = document.getElementById('heroModePedal');

    if (btnModeCrank && btnModePedal) {
      btnModeCrank.addEventListener('click', () => {
        engine.setDriveMode('crank');
        btnModeCrank.classList.add('active');
        btnModePedal.classList.remove('active');
      });

      btnModePedal.addEventListener('click', () => {
        engine.setDriveMode('pedal');
        btnModePedal.classList.add('active');
        btnModeCrank.classList.remove('active');
      });
    }

    // Component Inspection Card UI Callbacks
    const inspectCard = document.getElementById('heroInspectCard');
    const inspectCategory = document.getElementById('heroInspectCategory');
    const inspectTitle = document.getElementById('heroInspectTitle');
    const inspectDesc = document.getElementById('heroInspectDesc');
    const inspectSpecs = document.getElementById('heroInspectSpecs');
    const inspectClose = document.getElementById('heroInspectClose');
    const inspectBack = document.getElementById('heroInspectBack');

    window.onHeroCharkhaInspect = function (info) {
      if (!inspectCard) return;
      if (inspectCategory) inspectCategory.textContent = info.category;
      if (inspectTitle) inspectTitle.textContent = info.name;
      if (inspectDesc) inspectDesc.textContent = info.description;
      if (inspectSpecs) inspectSpecs.textContent = info.specs;
      inspectCard.classList.add('active');
      if (demoOverlay) demoOverlay.classList.remove('active');
    };

    window.onHeroCharkhaInspectClosed = function () {
      if (inspectCard) inspectCard.classList.remove('active');
    };

    if (inspectClose) {
      inspectClose.addEventListener('click', () => {
        engine.resetView();
      });
    }

    if (inspectBack) {
      inspectBack.addEventListener('click', () => {
        engine.resetView();
      });
    }

    // Auto Demo UI Callbacks
    const demoBadge = document.getElementById('heroDemoBadge');
    const demoTitle = document.getElementById('heroDemoTitle');
    const demoTagline = document.getElementById('heroDemoTagline');
    const demoDesc = document.getElementById('heroDemoDesc');
    const demoProgressFill = document.getElementById('heroDemoProgressFill');

    window.onHeroAutoDemoStep = function (step, idx, total) {
      if (inspectCard) inspectCard.classList.remove('active');
      if (demoOverlay) demoOverlay.classList.add('active');
      if (btnAutoDemo) btnAutoDemo.classList.add('btn-active');

      if (demoBadge) demoBadge.textContent = step.badge || `STEP ${String(idx + 1).padStart(2, '0')} / ${total}`;
      if (demoTitle) demoTitle.textContent = step.title;
      if (demoTagline) demoTagline.textContent = step.tagline;
      if (demoDesc) demoDesc.textContent = step.desc;
      if (demoProgressFill) demoProgressFill.style.width = `${((idx + 1) / total) * 100}%`;

      if (step.mode === 'pedal') {
        if (btnModePedal) btnModePedal.classList.add('active');
        if (btnModeCrank) btnModeCrank.classList.remove('active');
      } else {
        if (btnModeCrank) btnModeCrank.classList.add('active');
        if (btnModePedal) btnModePedal.classList.remove('active');
      }
    };

    window.onHeroAutoDemoStopped = function () {
      if (demoOverlay) demoOverlay.classList.remove('active');
      if (btnAutoDemo) btnAutoDemo.classList.remove('btn-active');
    };

    // Link Floating Badges to 3D Inspect
    const badgeFlywheel = document.querySelector('.floating-tech-badge.top-right');
    const badgeSpindles = document.querySelector('.floating-tech-badge.bottom-left');
    const badgeDynamo = document.querySelector('.floating-tech-badge.bottom-right');

    if (badgeFlywheel) {
      badgeFlywheel.addEventListener('click', () => engine.inspectComponent('flywheel'));
    }
    if (badgeSpindles) {
      badgeSpindles.addEventListener('click', () => engine.inspectComponent('spindles'));
    }
    if (badgeDynamo) {
      badgeDynamo.addEventListener('click', () => engine.inspectComponent('sensors'));
    }
  }

  // Expose Global Engine Initializer
  window.initHeroCharkha3D = function (containerId) {
    if (window.heroCharkhaEngine) return window.heroCharkhaEngine;
    window.heroCharkhaEngine = new HeroCharkha3DEngine(containerId);
    bindHeroUI(window.heroCharkhaEngine);
    return window.heroCharkhaEngine;
  };

  // Auto-init on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      const heroCanvasBox = document.getElementById('heroCharkha3DViewport');
      if (heroCanvasBox) {
        window.initHeroCharkha3D('heroCharkha3DViewport');
      }
    });
  } else {
    const heroCanvasBox = document.getElementById('heroCharkha3DViewport');
    if (heroCanvasBox) {
      window.initHeroCharkha3D('heroCharkha3DViewport');
    }
  }

})();
