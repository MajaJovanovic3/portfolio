import React, { useEffect, useState } from 'react';
import './Tetris.css'
import Stage from './Stage'
import Display from './Display'
import StartButton from './StartButton'
import { createStage, checkCollision } from './gameHelpers'
import { usePlayer } from './hooks/usePlayer'
import { useStage } from './hooks/useStage'
import { useInterval } from './hooks/useInterval'
import { useGameStatus } from './hooks/useGameStatus'
import { StyledTetrisWrapper, StyledTetris } from './styles/StyledTetris';
import { Visibility } from '@mui/icons-material';

const Tetris = (props) => {
    const [dropTime, setDropTime] = useState(null)
    const [gameOver, setGameOver] = useState(false)
    const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
    const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
    const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(rowsCleared);

    const movePlayer = dir => {
        if (!checkCollision(player, stage, { x: dir, y: 0 })) {
            updatePlayerPos({ x: dir, y: 0 });
        }
    }
    const startGame = () => {
        setStage(createStage())
        setDropTime(1000)
        resetPlayer()
        setGameOver(false);
        setScore(0)
        setRows(0)
        setLevel(0)
    }


    const drop = () => {
        if (rows > (level + 1) * 10) {
            setLevel(prev => prev + 1)
            setDropTime(1000)
        }

        if (!checkCollision(player, stage, { x: 0, y: 1 })) {
            updatePlayerPos({ x: 0, y: 1, collided: false })
        } else {
            if (player.pos.y < 1) {
                console.log("GAME OVER!");
                setGameOver(true);
                setDropTime(null);
            }
            updatePlayerPos({ x: 0, y: 0, collided: true });
        }

    }
    const keyUp = ({ keyCode }) => {
        if (!gameOver) {
            if (keyCode === 40) {
                setDropTime(1000)
            }
        }

    }

    const dropPlayer = () => {
        setDropTime(null)
        drop();

    }

    const move = (e) => {
        if (!gameOver) {
            if (e.keyCode === 37) {
                movePlayer(-1)
            }
            else if (e.keyCode === 39) {
                movePlayer(1)
            }
            else if (e.keyCode === 40) {
                dropPlayer()
            } else if (e.keyCode === 38) {
                playerRotate(stage, 1)
            }
        }
    }

    useInterval(() => {
        drop();
    }, dropTime)

    useEffect(() => {
        if (props.start === true) {
            document.getElementById('myBtn').getElementsByTagName('button')[0].click()
        }
    }, [props])

    return (
        <StyledTetrisWrapper role='button' tabIndex='0' onKeyDown={e => move(e)} onKeyUp={keyUp}>
            {window.innerWidth >= 560 ?
                <StyledTetris>
                    <Stage stage={stage} />
                    <aside>
                        {gameOver ? <Display gameOver={gameOver} text="Game Over" /> :
                            <div>
                                <Display text={`Score: ${score}`} />
                                <Display text={`Rows: ${rows}`} />
                                <Display text={`Level: ${level}`} />
                            </div>
                        }
                        <div id='myBtn'>
                            <StartButton callback={startGame} />
                        </div>
                    </aside>
                </StyledTetris> :
                <StyledTetris>
                    <Stage stage={stage} />
                    <div id='myBtn' style={{ display: 'none' }} >
                        <StartButton callback={startGame} />
                    </div>
                </StyledTetris>}
        </StyledTetrisWrapper>
    )
}

export default Tetris;