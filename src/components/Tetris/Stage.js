import * as React from 'react';
import { StyledStage, StyledStageMobile } from './styles/StyledStage';
import Cell from './Cell'

const Stage = ({ stage }) => (
   window.innerWidth >= 414 ?
      <StyledStage width={stage[0].length} height={stage.length}>
         {stage.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}
      </StyledStage> :
      <StyledStageMobile width={stage[0].length} height={stage.length}>
         {stage.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}
      </StyledStageMobile>
)

export default Stage;