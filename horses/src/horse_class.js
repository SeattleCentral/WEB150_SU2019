class Horse {
    constructor(name) {
        this.name = name
        this.position = 0
    }
    
    trot() {
        this.position += 0.5
    }
    
    gallup() {
        this.position += Math.random() * 2 + 0.5 // 0.7 and 2.5
        // this.position = this.position + ...
    }
    
    reset() {
        this.position = 0
    }
    
    draw() {
        const height = 40
        const width = 10 + this.position * 50
        const backgroundColor = 'purple'
        
        return `
            <div style="
                background-color: ${backgroundColor};
                height: ${height}px;
                width: ${width}px;
            ">
                <span style="color: white">🐎 ${this.name}</span>
            </div>
        `
    }
}

export default Horse
