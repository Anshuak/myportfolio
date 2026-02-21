import React, { useState, useRef, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../context/ThemeContext';
import SnakeGame from './SnakeGame';
import PongGame from './PongGame';

const TerminalSection = () => {
    const { theme } = useContext(ThemeContext);
    const [input, setInput] = useState('');
    const [activeGame, setActiveGame] = useState(null);
    const [history, setHistory] = useState([
        { type: 'output', text: 'Welcome to anshuOS v1.0.0' },
        { type: 'output', text: 'Type "help" for a list of available commands.' }
    ]);
    const containerRef = useRef(null);

    const commandList = {
        help: 'List all available commands',
        whoami: 'Display current user info',
        projects: 'List my top projects',
        skills: 'Display my technical skills',
        clear: 'Clear the terminal output',
        sudo: 'Execute a command as superuser',
        echo: 'Print text to the terminal',
        rps: 'Play Rock, Paper, Scissors! Usage: rps <rock|paper|scissors>',
        snake: 'Play the classic Snake game',
        pong: 'Play a game of Ping Pong against AI',
    };

    const handleCommand = (e) => {
        if (e.key === 'Enter') {
            const trimmedInput = input.trim();
            const newHistory = [...history, { type: 'input', text: trimmedInput }];

            const args = trimmedInput.split(' ');
            const command = args[0].toLowerCase();

            switch (command) {
                case 'help':
                    const helpText = Object.entries(commandList)
                        .map(([cmd, desc]) => `${cmd.padEnd(10)} - ${desc}`)
                        .join('\n');
                    newHistory.push({ type: 'output', text: helpText });
                    break;
                case 'whoami':
                    newHistory.push({ type: 'output', text: 'Anshu Kailash - Full Stack Developer, Gamer, and Problem Solver.' });
                    break;
                case 'projects':
                    newHistory.push({ type: 'output', text: '1. Portfolio Website\n2. E-commerce Platform\n3. Task Manager App\n(Type "cd projects" to explore more - spoiler: not implemented yet!)' });
                    break;
                case 'skills':
                    newHistory.push({ type: 'output', text: 'JavaScript, React, Node.js, Python, Java, C++, HTML/CSS, TailwindCSS, MongoDB, SQL' });
                    break;
                case 'clear':
                    setHistory([]);
                    setInput('');
                    return;
                case 'sudo':
                    newHistory.push({ type: 'output', text: 'Nice try. This incident will be reported. 🚨' });
                    break;
                case 'echo':
                    newHistory.push({ type: 'output', text: args.slice(1).join(' ') });
                    break;
                case 'rps':
                    const userChoice = args[1]?.toLowerCase();
                    const validChoices = ['rock', 'paper', 'scissors'];
                    if (!userChoice || !validChoices.includes(userChoice)) {
                        newHistory.push({ type: 'output', text: 'Please specify rock, paper, or scissors. Example: rps rock' });
                    } else {
                        const botChoice = validChoices[Math.floor(Math.random() * 3)];
                        let resultText = `I chose ${botChoice}. `;
                        if (userChoice === botChoice) {
                            resultText += 'It is a tie! 🤝';
                        } else if (
                            (userChoice === 'rock' && botChoice === 'scissors') ||
                            (userChoice === 'paper' && botChoice === 'rock') ||
                            (userChoice === 'scissors' && botChoice === 'paper')
                        ) {
                            resultText += 'You win! 🎉';
                        } else {
                            resultText += 'I win! 🤖';
                        }
                        newHistory.push({ type: 'output', text: resultText });
                    }
                    break;
                case 'snake':
                    setActiveGame('snake');
                    setInput('');
                    return;
                case 'pong':
                    setActiveGame('pong');
                    setInput('');
                    return;
                case '':
                    break; // Do nothing for empty enter
                default:
                    newHistory.push({ type: 'error', text: `command not found: ${command}` });
            }

            setHistory(newHistory);
            setInput('');
        }
    };

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    }, [history]);

    return (
        <section className={`py-20 font-mono ${theme === 'dark' ? 'bg-black text-green-500' : 'bg-white text-green-600'}`}>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    className={`text-4xl font-bold text-center mb-12 font-sans ${theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'}`}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8 }}
                >
                    Terminal
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className={`rounded-lg overflow-hidden shadow-2xl border ${theme === 'dark' ? 'bg-black border-gray-700' : 'bg-gray-50 border-gray-300'}`}
                >
                    {/* Terminal Header */}
                    <div className={`px-4 py-2 flex items-center space-x-2 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'}`}>
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <div className={`text-xs ml-4 font-sans ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>bash - anshu - 80x24</div>
                    </div>

                    {/* Terminal Body */}
                    <div ref={containerRef} className="p-4 h-96 overflow-y-auto custom-scrollbar scroll-smooth relative">
                        {activeGame === 'snake' ? (
                            <SnakeGame theme={theme} onClose={() => { setActiveGame(null); setTimeout(() => containerRef.current.focus(), 10); }} />
                        ) : activeGame === 'pong' ? (
                            <PongGame theme={theme} onClose={() => { setActiveGame(null); setTimeout(() => containerRef.current.focus(), 10); }} />
                        ) : (
                            <>
                                {history.map((line, index) => (
                                    <div key={index} className="mb-2 whitespace-pre-wrap">
                                        {line.type === 'input' && (
                                            <div className="flex">
                                                <span className={`mr-2 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>anshu@portfolio:~$</span>
                                                <span className={theme === 'dark' ? 'text-white' : 'text-black'}>{line.text}</span>
                                            </div>
                                        )}
                                        {line.type === 'output' && <div>{line.text}</div>}
                                        {line.type === 'error' && <div className="text-red-500">{line.text}</div>}
                                    </div>
                                ))}

                                <div className="flex">
                                    <span className={`mr-2 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>anshu@portfolio:~$</span>
                                    <input
                                        type="text"
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        onKeyDown={handleCommand}
                                        className={`flex-1 bg-transparent outline-none caretb-blink ${theme === 'dark' ? 'text-white' : 'text-black'}`}
                                        spellCheck="false"
                                    />
                                </div>
                            </>
                        )}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default TerminalSection;
