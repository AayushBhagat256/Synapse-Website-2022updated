import React from 'react';
import lottie from 'lottie-web';
import animationData from '../../assets/brainJson.json';

const LoadingAnimation = () => {
    const containerRef = React.useRef(null);

    React.useEffect(() => {
        const anim = lottie.loadAnimation({
            container: containerRef.current,
            animationData: animationData,
            loop: true, // Set to true if you want the animation to loop
            autoplay: true, // Set to true if you want the animation to start playing automatically
            rendererSettings: {
                // Customize the size of the animation here
                preserveAspectRatio: 'xMidYMid slice', // Change this value as needed
              },
        });

        return () => {
            anim.destroy(); // Cleanup on component unmount
        };
    }, []);

    return (
        <div className="loader">
            <div className="loader-content">
            <div ref={containerRef} />
            <div className="text">Loading ...</div>
            </div>
        </div>
    );
};

export default LoadingAnimation
