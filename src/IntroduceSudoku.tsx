import React from 'react';

export const Introduce = () => {
    return (
        <div>
            <div>
            <br/>
            <h2>What is Sudoku</h2>
            <p>Sudoku is a logic-based, combinatorial number-placement puzzle. In classic Sudoku, the objective is to fill a 9×9 grid with digits so that each column, each row, and each of the nine 3×3 subgrids that compose the grid (also called "boxes", "blocks", or "regions") contain all of the digits from 1 to 9. The puzzle setter provides a partially completed grid, which for a well-posed puzzle has a single solution.</p>
            </div>
            <div>
            <br/> <h2>How to play sudoku</h2> 
            <ol>
                <li><strong>Scan the puzzle for easy numbers. </strong>Look for rows, columns, or boxes that have only one possible value for a cell. These are called "singles." Fill in these cells with the appropriate numbers.</li>
                <li><strong>Use pencil marks to note possible values for each cell. </strong>As you solve the puzzle, you may come across cells that have more than one possible value. Mark these cells with pencil marks to remind yourself of the possibilities.</li>
                <li><strong>Use logic to eliminate impossible values.</strong> Look for cells where a certain value cannot be placed because it would violate the rules of Sudoku. For example, if a row already contains the digits 1, 2, and 3, then no other cell in that row can contain those digits.</li>
                <li><strong>Use advanced techniques to solve the puzzle. </strong>As you become more experienced in solving Sudoku puzzles, you can learn advanced techniques that can help you solve even the most difficult puzzles. Some of these techniques include:</li>
                <ul>
                    <li><strong>X-Wing: </strong>This technique is used to eliminate impossible values in cells that are in the same row or column as two cells that contain the same value.</li>
                    <li><strong>Swordfish: </strong>This technique is used to eliminate impossible values in cells that are in the same box as three cells that contain the same value.</li>
                    <li><strong>Hidden Singles:</strong> This technique is used to find values that are the only possible value for a cell, even though they are not the only possible value for any other cell in the same row, column, or box.</li>
                </ul>
                <li><strong>Be patient and persistent. </strong>Sudoku puzzles can be challenging, but they are also very rewarding to solve. If you get stuck, take a break and come back to the puzzle later. With practice, you will become faster and more skilled at solving Sudoku puzzles.</li>
            </ol>
            </div>
            <div>
            <br/><h2>Additional tips for solving Sudoku puzzles:</h2> 
            <ul>
                <li><strong>Start with the easiest puzzles.</strong> As you become more experienced, you can try more difficult puzzles.</li>
                <li><strong>Take breaks. </strong>If you get stuck, take a break and come back to the puzzle later.</li>
                <li><strong>Use a pencil.</strong> Pencil marks will help you keep track of possible values for each cell.</li>
                <li><strong>Don't be afraid to make mistakes. </strong>Everyone makes mistakes when solving Sudoku puzzles. Just learn from your mistakes and move on.</li>
                <li><strong>Have fun!</strong> Sudoku puzzles are a great way to challenge your mind and have some fun at the same time.</li>
            </ul>
            </div>
        </div>
    )
}

