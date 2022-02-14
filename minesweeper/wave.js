const maze = [
    [0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 1, 1, 0, 1, 0],
    [0, 0, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0]
];
waveAlgorithm(maze);
function waveAlgorithm(maze) {
    const queue = [];
    maze[0][0] = 2;
    queue.push({ x: 0, y: 0 });
    let neighbors = [];
    do {
        const x = queue[0].x;
        const y = queue[0].y;

        if (y > 0) neighbors.push({ x: x, y: y - 1 });
        if (y < maze.length - 1) neighbors.push({ x: x, y: y + 1 });
        if (x > 0) neighbors.push({ x: x - 1, y: y });
        if (x > 0 && y > 0) neighbors.push({ x: x - 1, y: y - 1 });
        if (x > 0 && y < maze.length - 1) neighbors.push({ x: x - 1, y: y + 1 });
        if (x < maze.length - 1) neighbors.push({ x: x + 1, y: y });
        if (x < maze.length - 1 && y > 0) neighbors.push({ x: x + 1, y: y - 1 });
        if (x < maze.length - 1 && y < maze.length - 1) neighbors.push({ x: x + 1, y: y + 1 });

        for (const neighbor of neighbors) {//переделать с of
            if (maze[neighbor.x][neighbor.y] === 0) {
                maze[neighbor.x][neighbor.y] = 2;
                queue.push(neighbor);
            }
        }
        neighbors=[];
        queue.shift();
        console.log(queue);
    } while (queue.length !== 0);
console.log(maze);
}