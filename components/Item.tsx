class Item {
	// Fields
	private name: string;
	private uri: string;
	private image?: string;

	// Constructors
	constructor(name: string, uri: string, image?: string) {
    // Validate the name
		if (name.length < 1) {
			name = 'Short-Named Item';
		}
		if (name.length > 30) {
			name = 'Long-Named Item';
		}

    // Set the fields
		this.name = name;
		this.uri = uri;
		this.image = image;
	}

	// Accessor methods
	getName(): string {
		return this.name;
	}
	getImage(): string | undefined {
		return this.image;
	}

	// Mutator methods
	putName(name: string): void {
		this.name = name;
	}
	putImage(image: string): void {
		this.image = image;
	}
}
