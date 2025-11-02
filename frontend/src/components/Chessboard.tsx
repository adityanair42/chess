import type { Color, PieceSymbol, Square } from "chess.js";
import { useState } from "react";
import { MOVE } from "../../../backend1/src/messages";

export const Chessboard = ({ chess, setBoard, board, socket }: {
  board: ({
    square: Square;
    type: PieceSymbol;
    color: Color;
  } | null)[][],
  socket: WebSocket,
  chess: any,
  setBoard: any
}) => {
  const [from, setFrom] = useState<Square | null>(null);
  const [to, setTo] = useState<Square | null>(null);

  return <div>
    {board.map((row, i) => {
      return <div key={i} className="flex">
        {row.map((square, j) => {
          return <div onClick={() => {
            const squareRepresentation = String.fromCharCode(97 + j) + "" + (8 - i) as Square;
            if(!from){
              setFrom(squareRepresentation)
            } else {
              chess.move({
                from,
                to: squareRepresentation
              });
              setBoard(chess.board())
              socket.send(JSON.stringify({
                type: MOVE,
                move: {
                  from,
                  to: squareRepresentation
                }
              }))
              setFrom(null);
            }
          }} key={j} className={`w-16 h-16 ${(i + j) % 2 == 0 ? 'bg-green-400' : 'bg-white'}`}>
            <div className="flex justify-center h-full items-center">
              {square ? square.type : ""}
            </div>
          </div>
        })}
      </div>
    })}
  </div>
}