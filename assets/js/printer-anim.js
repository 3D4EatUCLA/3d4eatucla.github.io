document.addEventListener("DOMContentLoaded", function() {
    // 1. Select the SVG elements matching the IDs in your HTML
    var extruder = document.getElementById('Extruder');
    var pipe = document.getElementById('Pipe');
    var bg = document.getElementById('PrinterBG');
    var ukulele = document.getElementById('Ukulele');
    var hand = document.getElementById('Arm');
    var drone = document.getElementById('Drone');

    // 2. Initialize the starting positions and hide the objects
    var t1 = new TimelineMax({paused: true}); 
    t1.to(extruder, 0.5, { x: 88, transformOrigin: "50% 50%", ease: Linear.ease })
      .to(pipe, 0.5, { y: 166, transformOrigin: "50% 50%", ease: Linear.ease }, 0)
      .set(ukulele, {opacity: 0})
      .set(hand, {opacity: 0})
      .set(drone, {opacity: 0});

    // 3. Define the printing (extruder moving side to side) sequences
    var t2 = new TimelineMax({repeat: 5, paused: true});
    t2.to(extruder, 0.25, { x: '+=24', transformOrigin:"50% 50%", ease: Linear.easeOut })
      .to(extruder, 0.5, { x: '-=48', transformOrigin:"50% 50%", ease: Linear.ease })
      .to(extruder, 0.25, { x: '+=24', transformOrigin:"50% 50%", ease: Linear.easeIn });

    var t9 = new TimelineMax({repeat: 5, paused: true});
    t9.to(extruder, 0.25, { x: '+=36', transformOrigin:"50% 50%", ease: Linear.easeOut })
      .to(extruder, 0.5, { x: '-=72', transformOrigin:"50% 50%", ease: Linear.ease })
      .to(extruder, 0.25, { x: '+=36', transformOrigin:"50% 50%", ease: Linear.easeIn });

    var t10 = new TimelineMax({repeat: 5, paused: true});
    t10.to(extruder, 0.25, { x: '+=88', transformOrigin:"50% 50%", ease: Linear.easeOut })
       .to(extruder, 0.5, { x: '-=172', transformOrigin:"50% 50%", ease: Linear.ease })
       .to(extruder, 0.25, { x: '+=88', transformOrigin:"50% 50%", ease: Linear.easeIn });

    // 4. Define the vertical bed movements and object reveals
    var t3 = new TimelineMax({paused: true});
    t3.to(pipe, 5, { y: '-=165', transformOrigin: "50% 50%", ease: Linear.ease })
      .to(bg, 5, { y: '-=165', transformOrigin: "50% 50%", ease: Linear.ease }, 0)
      .fromTo(ukulele, 0.01, {opacity: 0}, {opacity: 1}, 0);

    var t4 = new TimelineMax({paused: true});
    t4.to(extruder, 0.5, { x: 88, transformOrigin: "50% 50%", ease: Linear.ease })
      .to(pipe, 0.5, { y: 166, transformOrigin: "50% 50%", ease: Linear.ease }, 0)
      .to(bg, 0.5, { y: '+=165', transformOrigin: "50% 50%", ease: Linear.ease }, 0)
      .to(ukulele, 0.5, { opacity: 0 }, 0)
      .to(".printerst18", 0.5, {fill: "#6639a6"}, 0); // Changes filament to purple

    var t5 = new TimelineMax({paused: true});
    t5.to(pipe, 5, { y: '-=165', transformOrigin: "50% 50%", ease: Linear.ease })
      .to(bg, 5, { y: '-=165', transformOrigin: "50% 50%", ease: Linear.ease }, 0)
      .fromTo(hand, 0.01, {opacity: 0}, {opacity: 1}, 0);

    var t6 = new TimelineMax({paused: true});
    t6.to(extruder, 0.5, { x: 88, transformOrigin: "50% 50%", ease: Linear.ease })
      .to(pipe, 0.5, { y: 166, transformOrigin: "50% 50%", ease: Linear.ease }, 0)
      .to(bg, 0.5, { y: '+=165', transformOrigin: "50% 50%", ease: Linear.ease }, 0)
      .to(hand, 0.5, { opacity: 0 }, 0)
      .to(".printerst18", 0.5, {fill: "#b83b5e"}, 0); // Changes filament to red

    var t7 = new TimelineMax({paused: true});
    t7.to(pipe, 5, { y: '-=80', transformOrigin: "50% 50%", ease: Linear.ease })
      .to(bg, 5, { y: '-=80', transformOrigin: "50% 50%", ease: Linear.ease }, 0)
      .fromTo(drone, 0.01, {opacity: 0}, {opacity: 1}, 0);

    var t8 = new TimelineMax({paused: true});
    t8.to(extruder, 0.5, { x: 88, transformOrigin: "50% 50%", ease: Linear.ease })
      .to(pipe, 0.5, { y: 166, transformOrigin: "50% 50%", ease: Linear.ease }, 0)
      .to(bg, 0.5, { y: '+=80', transformOrigin: "50% 50%", ease: Linear.ease }, 0)
      .to(drone, 0.5, { opacity: 0 }, 0)
      .to(".printerst18", 0.5, {fill: "#3490de"}, 0); // Changes filament to blue

    // 5. Build master loops
    var UkuleleTL = new TimelineMax({paused: true});
    UkuleleTL.add(t2.play()).add(t3.play(), 0).add(t4.play());

    var HandTL = new TimelineMax({paused: true});
    HandTL.add(t9.play()).add(t5.play(), 0).add(t6.play());

    var DroneTL = new TimelineMax({paused: true});
    DroneTL.add(t10.play()).add(t7.play(), 0).add(t8.play());

    var LoopTimeline = new TimelineMax({repeat: -1, paused: true});
    LoopTimeline.add(UkuleleTL.play()).add(HandTL.play()).add(DroneTL.play());

    // 6. Play the master timeline
    var MasterTL = new TimelineMax();
    MasterTL.add(t1.play()).add(LoopTimeline.play());
});
