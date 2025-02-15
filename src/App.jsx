import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';
import photo1 from './assets/photos/photo1.JPG';
import photo2 from './assets/photos/photo2.jpg';
import photo3 from './assets/photos/photo3.jpg';
import photo4 from './assets/photos/photo4.jpg';
import photo5 from './assets/photos/photo5.jpg';

const photos = [
    { id: 1, src: photo1, alt: 'Photo 1' },
    { id: 2, src: photo2, alt: 'Photo 2' },
    { id: 3, src: photo3, alt: 'Photo 3' },
    { id: 4, src: photo4, alt: 'Photo 4' },
    { id: 5, src: photo5, alt: 'Photo 5' }
];

function App() {
    const [hearts, setHearts] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            const newHeart = {
                id: Date.now(),
                left: Math.random() * window.innerWidth + 'px',
                animationDuration: Math.random() * 2 + 2 + 's'
            };

            setHearts(prev => [...prev, newHeart]);

            setTimeout(() => {
                setHearts(prev =>
                    prev.filter(heart => heart.id !== newHeart.id)
                );
            }, parseFloat(newHeart.animationDuration) * 1000);
        }, 300);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-pink-50 py-12 px-4">
            {/* Floating Hearts */}
            <div className="heart-container">
                {hearts.map(heart => (
                    <div
                        key={heart.id}
                        className="heart"
                        style={{
                            left: heart.left,
                            animationDuration: heart.animationDuration
                        }}
                    />
                ))}
            </div>

            {/* Main Content */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl mx-auto"
            >
                <div className="text-center mb-12">
                    <motion.h1
                        className="text-4xl md:text-6xl font-bold text-pink-600 mb-4"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        Happy Valentine's Day!
                    </motion.h1>
                    <p className="text-xl text-pink-500">
                        Our Love Story in Photos
                    </p>
                </div>

                {/* Photo Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {photos.map(photo => (
                        <motion.div
                            key={photo.id}
                            className="photo-frame aspect-square"
                            whileHover={{ scale: 1.05 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: photo.id * 0.2 }}
                        >
                            <div className="w-full h-full flex items-center justify-center bg-gray-100 relative overflow-hidden">
                                <img
                                    src={photo.src}
                                    alt={photo.alt}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Love Message */}
                <motion.div
                    className="mt-12 text-center bg-white p-8 rounded-lg shadow-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    <h2 className="text-2xl font-bold text-pink-600 mb-4">
                        Luis e Amanda 💛
                    </h2>
                    <p className="text-gray-700">
                        Eu te amo muito e pra sempre meu amor, happy Valentines day! ❤️
                    </p>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default App;
