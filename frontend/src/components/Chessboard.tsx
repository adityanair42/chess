import type { Color, PieceSymbol, Square } from "chess.js";
import { useEffect, useState } from "react";
import { MOVE } from "../../../backend1/src/messages";

export const Chessboard = ({ chess, setBoard, board, socket, color }: {
  board: ({
    square: Square;
    type: PieceSymbol;
    color: Color;
  } | null)[][],
  socket: WebSocket,
  chess: any,
  setBoard: any,
  color: String | null
}) => {
  const [from, setFrom] = useState<Square | null>(null);
  const [to, setTo] = useState<Square | null>(null);

  return <div>
    {board.map((row, i) => {
      return <div key={i} className="flex">
        {row.map((square, j) => {
          return <div onClick={() => {
            const squareRepresentation = String.fromCharCode(97 + j) + "" + (8 - i) as Square;
            if(!from && square?.color !== color?.substring(0,1)){
              console.log('Cant move this color')
              setFrom(null);
              return
            }else if(!from){
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
              {square ? <img className="w-8" src={`/${square?.color == 'b' ? square.type : `${square?.type?.toUpperCase()} copy`}.png`} /> : ""}
            </div>
          </div>
        })}
      </div>
    })}
  </div>
}