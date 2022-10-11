document.fonts.ready.then(() => {
    var innerText = document.getElementById("coming-soon-text");

    // getting screen widths in media query pov
    const mediaQueryOne = window.matchMedia('(min-width: 1024px)');
    const mediaQueryTwo = window.matchMedia('(max-width: 768px)');
    const mediaQueryThree = window.matchMedia('(max-width: 425px)');

    // laptop screens
    if(mediaQueryOne.matches){
        // alert('works 1' + " - " + screen.width);
        var text = new Blotter.Text("Coming Soon", {
            family: "roc grotesk wide",
            size: 85,
            fill: "white" 
        });
    }

    // tab styles
    // if (mediaQueryTwo.matches) {
    //     var text = new Blotter.Text("Coming Soon", {
    //         family: "roc grotesk wide",
    //         size: 60,
    //         fill: "white" 
    //     });
    // }

    // mobile styles
    // if (mediaQueryThree.matches) {
    //     // alert('works 3' + " - " + screen.width);
    //     var text = new Blotter.Text("Coming Soon", {
    //         family: "roc grotesk wide",
    //         size: 40,
    //         fill: "white" 
    //     });
    // }
    
    
    let material = new Blotter.RollingDistortMaterial();
    material.uniforms.uSineDistortSpread.value = 0.000;
    material.uniforms.uSineDistortCycleCount.value = 5;
    material.uniforms.uSineDistortAmplitude.value = 0.03;
    material.uniforms.uNoiseDistortVolatility.value = 15;
    material.uniforms.uNoiseDistortAmplitude.value = 0.004;
    material.uniforms.uRotation.value = 200;
    material.uniforms.uSpeed.value = 0.18;

    let blotter = new Blotter(material, {
        texts: text
    });

    let scope = blotter.forText(text);
    scope.appendTo(innerText); 
});