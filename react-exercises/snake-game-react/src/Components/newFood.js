const CANVAS_SIZE = [460, 460];

export const SCALE = 20;
export const newFood = food =>
food.map((_a, i) => Math.floor(Math.random() * (CANVAS_SIZE[i] / SCALE)));