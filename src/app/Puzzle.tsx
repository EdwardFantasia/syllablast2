'use client'

import Syllable from "./Syllable"

export default function Puzzle(boardState: string[][]){
    return(
        <div>
            {boardState.map(row => {
                return(
                    <div>
                        {row.map(syll => {
                            return(
                                /**replace with Syllable component */
                                <p>{syll}</p>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}