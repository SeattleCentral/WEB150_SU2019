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
    
    draw() {
        const height = 40
        const width = 10 + this.position * 100
        const backgroundColor = 'green'
        
        return `
            <div style="
                background-color: ${backgroundColor};
                height: ${height}px;
                width: ${width}px;
            ">
                <span style="color: white">${this.position}</span>
            </div>
        `
    }
}

export default Horse
