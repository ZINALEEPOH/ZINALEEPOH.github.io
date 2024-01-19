$(document).ready(function () {
    $('#fullpage').fullpage({
        sectionsColor: ['#03A9F4', '#2ECC71', '#00BCD4'],
        navigation: true,
        navigationPosition: 'right',
        anchors: ['section1', 'section2', 'section3'],
        afterLoad: function (origin, destination, direction) {
            if (destination.index == 0) { // Animation for Section 1
                animateSection1();
            } else if (destination.index == 1) { // Animation for Section 2
                animateSection2();
            } else if (destination.index == 2) { // Animation for Section 3
                animateSection3();
            }
        }
    });

    function animateSection1() {
        anime({
            targets: '#name',
            translateY: [-50, 0],
            opacity: [0, 1],
            duration: 800,
            easing: 'easeInOutQuad'
        });

        anime({
            targets: '#photo',
            translateY: [-50, 0],
            opacity: [0, 1],
            duration: 800,
            delay: 200,
            easing: 'easeInOutQuad'
        });

        var ageCounter = { value: 0 };
        anime({
            targets: ageCounter,
            value: 19,
            duration: 2000,
            round: 1,
            easing: 'easeInOutQuad',
            update: function () {
                document.querySelector('#age').innerHTML = '<b>Age:</b> ' + ageCounter.value;
            }
        });

        anime({
            targets: '#info',
            translateY: [-50, 0],
            opacity: [0, 1],
            duration: 800,
            delay: 300,
            easing: 'easeInOutQuad'
        });
    }

    function animateSection2() {
        anime({
            targets: '#school',
            translateY: [-50, 0],
            opacity: [0, 1],
            duration: 800,
            easing: 'easeInOutQuad'
        });

        anime({
            targets: '#photo2',
            translateY: [-50, 0],
            opacity: [0, 1],
            duration: 800,
            delay: 200,
            easing: 'easeInOutQuad'
        });

        anime({
            targets: '#contact',
            translateY: [-50, 0],
            opacity: [0, 1],
            duration: 800,
            delay: 300,
            easing: 'easeInOutQuad'
        });

        anime({
            targets: '#info2',
            translateY: [-50, 0],
            opacity: [0, 1],
            duration: 800,
            delay: 300,
            easing: 'easeInOutQuad'
        });

        anime({
            targets: '#social-icons',
            translateY: [-50, 0],
            opacity: [0, 1],
            duration: 800,
            delay: 300,
            easing: 'easeInOutQuad'
        });
    }

    function animateSection3() {
        anime({
            targets: '#projects',
            translateY: [-50, 0],
            opacity: [0, 1],
            duration: 800,
            easing: 'easeInOutQuad'
        });

        anime({
            targets: '#projname',
            translateX: [-50, 0],
            opacity: [0, 1],
            duration: 800,
            delay: 200,
            easing: 'easeInOutQuad'
        });

        anime({
            targets: '#desc',
            translateX: [-50, 0],
            opacity: [0, 1],
            duration: 800,
            delay: 300,
            easing: 'easeInOutQuad'
        });
    }
});
