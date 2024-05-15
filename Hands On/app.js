class Color {
    constructor(r, g, b, name) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name
    }
    greet() {
        return `Hello from a ${this.name} Color!`
    }
}

const c1 = new Color(255, 67, 89, "Tomato")