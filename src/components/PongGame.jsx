import React, { useState, useEffect, useCallback, useRef } from 'react';

const GAME_WIDTH = 400;
const GAME_HEIGHT = 300;
const PADDLE_HEIGHT = 60;
const PADDLE_WIDTH = 10;
const BALL_SIZE = 10;
const PADDLE_SPEED = 20;
const BALL_SPEED = 5;

const PongGame = ({ onClose, theme }) => {
    const [gameState, setGameState] = useState({
        ballX: GAME_WIDTH / 2,
        ballY: GAME_HEIGHT / 2,
        ballDX: BALL_SPEED,
        ballDY: BALL_SPEED,
        playerY: GAME_HEIGHT / 2 - PADDLE_HEIGHT / 2,
        aiY: GAME_HEIGHT / 2 - PADDLE_HEIGHT / 2,
        playerScore: 0,
        aiScore: 0,
    });
    const [gameOver, setGameOver] = useState(false);
    const requestRef = useRef();

    const handleKeyDown = useCallback((e) => {
        setGameState((prev) => {
            let newY = prev.playerY;
            if (e.key === 'ArrowUp' || e.key === 'w') {
                newY = Math.max(newY - PADDLE_SPEED, 0);
            } else if (e.key === 'ArrowDown' || e.key === 's') {
                newY = Math.min(newY + PADDLE_SPEED, GAME_HEIGHT - PADDLE_HEIGHT);
            } else if (e.key === 'Escape') {
                onClose();
            }
            return { ...prev, playerY: newY };
        });
    }, [onClose]);

    useEffect(() => {
        if (gameOver) return;

        const updateGame = () => {
            setGameState(prev => {
                let { ballX, ballY, ballDX, ballDY, playerY, aiY, playerScore, aiScore } = prev;

                // Move ball
                ballX += ballDX;
                ballY += ballDY;

                // Wall collision (top/bottom)
                if (ballY <= 0 || ballY >= GAME_HEIGHT - BALL_SIZE) {
                    ballDY = -ballDY;
                }

                // AI paddle movement
                const aiCenterY = aiY + PADDLE_HEIGHT / 2;
                if (aiCenterY < ballY - BALL_SIZE) {
                    aiY = Math.min(aiY + PADDLE_SPEED * 0.2, GAME_HEIGHT - PADDLE_HEIGHT);
                } else if (aiCenterY > ballY + BALL_SIZE) {
                    aiY = Math.max(aiY - PADDLE_SPEED * 0.2, 0);
                }

                // Paddle collision
                if (
                    ballX <= PADDLE_WIDTH &&
                    ballY + BALL_SIZE >= playerY &&
                    ballY <= playerY + PADDLE_HEIGHT
                ) {
                    ballDX = Math.abs(ballDX);
                    ballX = PADDLE_WIDTH; // prevents getting stuck
                } else if (
                    ballX >= GAME_WIDTH - PADDLE_WIDTH - BALL_SIZE &&
                    ballY + BALL_SIZE >= aiY &&
                    ballY <= aiY + PADDLE_HEIGHT
                ) {
                    ballDX = -Math.abs(ballDX);
                    ballX = GAME_WIDTH - PADDLE_WIDTH - BALL_SIZE;
                }

                // Scoring
                if (ballX < 0) {
                    aiScore += 1;
                    ballX = GAME_WIDTH / 2;
                    ballY = GAME_HEIGHT / 2;
                    ballDX = BALL_SPEED;
                } else if (ballX > GAME_WIDTH) {
                    playerScore += 1;
                    ballX = GAME_WIDTH / 2;
                    ballY = GAME_HEIGHT / 2;
                    ballDX = -BALL_SPEED;
                }

                if (playerScore >= 5 || aiScore >= 5) {
                    setGameOver(true);
                }

                return { ...prev, ballX, ballY, ballDX, ballDY, aiY, playerScore, aiScore };
            });

            requestRef.current = requestAnimationFrame(updateGame);
        };

        requestRef.current = requestAnimationFrame(updateGame);
        return () => cancelAnimationFrame(requestRef.current);
    }, [gameOver]);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handleKeyDown]);

    const resetGame = () => {
        setGameState({
            ballX: GAME_WIDTH / 2,
            ballY: GAME_HEIGHT / 2,
            ballDX: BALL_SPEED,
            ballDY: BALL_SPEED,
            playerY: GAME_HEIGHT / 2 - PADDLE_HEIGHT / 2,
            aiY: GAME_HEIGHT / 2 - PADDLE_HEIGHT / 2,
            playerScore: 0,
            aiScore: 0,
        });
        setGameOver(false);
    }

    return (
        <div className={`w-full h-full flex flex-col items-center justify-center p-2 font-mono ${theme === 'dark' ? 'text-green-500' : 'text-green-700'}`}>
            <div className="flex justify-between w-[400px] mb-2">
                <span>Player: {gameState.playerScore}</span>
                <span className="text-gray-500 text-xs mt-1">Press ESC to quit</span>
                <span>AI: {gameState.aiScore}</span>
            </div>

            <div
                className={`relative overflow-hidden w-[400px] h-[300px] border ${theme === 'dark' ? 'border-gray-600 bg-gray-900' : 'border-gray-400 bg-gray-100'}`}
            >
                {/* Center Line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-600 border-dashed border-l" />

                {/* Player Paddle */}
                <div
                    className="absolute bg-green-500"
                    style={{ left: 0, top: gameState.playerY, width: PADDLE_WIDTH, height: PADDLE_HEIGHT }}
                />

                {/* AI Paddle */}
                <div
                    className="absolute bg-red-500"
                    style={{ left: GAME_WIDTH - PADDLE_WIDTH, top: gameState.aiY, width: PADDLE_WIDTH, height: PADDLE_HEIGHT }}
                />

                {/* Ball */}
                <div
                    className={`absolute w-[10px] h-[10px] rounded-full ${theme === 'dark' ? 'bg-white' : 'bg-black'}`}
                    style={{ left: gameState.ballX, top: gameState.ballY }}
                />

                {gameOver && (
                    <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center">
                        <h3 className="text-white text-xl font-bold mb-4">
                            {gameState.playerScore >= 5 ? 'You Win! 🎉' : 'AI Wins! 🤖'}
                        </h3>
                        <button
                            onClick={resetGame}
                            className="px-4 py-2 border border-green-500 text-green-500 hover:bg-green-500 hover:text-black mb-2 transition-colors"
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
                Use UP/DOWN or W/S to move paddle. First to 5 wins.
            </div>
        </div>
    );
};

export default PongGame;
