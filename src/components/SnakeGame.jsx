import React, { useState, useEffect, useCallback, useRef } from 'react';

const GRID_SIZE = 20;

const SnakeGame = ({ onClose, theme }) => {
    const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
    const [food, setFood] = useState({ x: 5, y: 5 });
    const [direction, setDirection] = useState({ x: 0, y: -1 });
    const [gameOver, setGameOver] = useState(false);
    const [score, setScore] = useState(0);
    const [paused, setPaused] = useState(false);

    const useInterval = (callback, delay) => {
        const savedCallback = useRef();
        useEffect(() => {
            savedCallback.current = callback;
        }, [callback]);
        useEffect(() => {
            if (delay !== null) {
                const id = setInterval(() => savedCallback.current(), delay);
                return () => clearInterval(id);
            }
        }, [delay]);
    };

    const handleKeyDown = useCallback((e) => {
        switch (e.key) {
            case 'ArrowUp':
            case 'w':
                setDirection(prev => prev.y !== 1 ? { x: 0, y: -1 } : prev);
                break;
            case 'ArrowDown':
            case 's':
                setDirection(prev => prev.y !== -1 ? { x: 0, y: 1 } : prev);
                break;
            case 'ArrowLeft':
            case 'a':
                setDirection(prev => prev.x !== 1 ? { x: -1, y: 0 } : prev);
                break;
            case 'ArrowRight':
            case 'd':
                setDirection(prev => prev.x !== -1 ? { x: 1, y: 0 } : prev);
                break;
            case 'p':
                setPaused(p => !p);
                break;
            case 'Escape':
                onClose();
                break;
            default:
                break;
        }
    }, [onClose]);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handleKeyDown]);

    const moveSnake = () => {
        if (gameOver || paused) return;

        setSnake(prev => {
            const newHead = {
                x: (prev[0].x + direction.x + GRID_SIZE) % GRID_SIZE,
                y: (prev[0].y + direction.y + GRID_SIZE) % GRID_SIZE
            };

            if (prev.some(segment => segment.x === newHead.x && segment.y === newHead.y)) {
                setGameOver(true);
                return prev;
            }

            const newSnake = [newHead, ...prev];

            if (newHead.x === food.x && newHead.y === food.y) {
                setScore(s => s + 10);
                setFood({
                    x: Math.floor(Math.random() * GRID_SIZE),
                    y: Math.floor(Math.random() * GRID_SIZE)
                });
            } else {
                newSnake.pop();
            }

            return newSnake;
        });
    };

    useInterval(moveSnake, 150 - Math.min(score, 100));

    const resetGame = () => {
        setSnake([{ x: 10, y: 10 }]);
        setFood({ x: 5, y: 5 });
        setDirection({ x: 0, y: -1 });
        setGameOver(false);
        setScore(0);
    };

    return (
        <div className={`w-full h-full flex flex-col items-center justify-center p-2 font-mono ${theme === 'dark' ? 'text-green-500' : 'text-green-700'}`}>
            <div className="flex justify-between w-full max-w-[300px] mb-2">
                <span>Score: {score}</span>
                <span className="text-gray-500 text-xs mt-1">Press ESC to quit</span>
            </div>

            <div
                className={`relative w-[300px] h-[300px] border ${theme === 'dark' ? 'border-gray-600 bg-gray-900' : 'border-gray-400 bg-gray-100'}`}
            >
                {snake.map((segment, i) => (
                    <div
                        key={i}
                        className={`absolute w-[15px] h-[15px] ${i === 0 ? 'bg-green-500' : 'bg-green-700'}`}
                        style={{ left: segment.x * 15, top: segment.y * 15 }}
                    />
                ))}
                <div
                    className="absolute w-[15px] h-[15px] bg-red-500 rounded-full"
                    style={{ left: food.x * 15, top: food.y * 15 }}
                />

                {gameOver && (
                    <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center">
                        <h3 className="text-red-500 text-xl font-bold mb-4">Game Over</h3>
                        <button
                            onClick={resetGame}
                            className="px-4 py-2 border border-green-500 hover:bg-green-500 hover:text-black mb-2 transition-colors"
                        >
                            Play Again
                        </button>
                        <button
                            onClick={onClose}
                            className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
                        >
                            Exit
                        </button>
                    </div>
                )}
            </div>
            <div className="mt-2 text-xs text-center text-gray-500">
                Use WASD or Arrows to move. P to pause.
            </div>
        </div>
    );
};

export default SnakeGame;
