function advanceSnake() { 
    const head = { x: snake[0].x + dx, y: snkae[0].y + dy }; 
    snake.unshift(head); 
    snake.pop();
}

advanceSnake();
