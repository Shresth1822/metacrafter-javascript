//variable to hold NFTs
let nftCollection = [];

//mint nft function
function mintNFT(name, description, age) {
    // Create an NFT object with the provided metadata
    const nft = {
        name: name,
        description: description,
        age: age
    };

    // Store the NFT in the nftCollection array
    nftCollection.push(nft);
}

//print minted nfts function
function listNFTs() {
    for (const nft of nftCollection) {
        console.log("Name:", nft.name);
        console.log("Description:", nft.description);
        console.log("Age:", nft.age);
        console.log("------------");
    }
}

//  Print the total number of NFTs we have minted to the console
function getTotalSupply() {
    return nftCollection.length;
}

// Mint some NFTs
mintNFT("Virat Kohli", "Cricketer", "33");
mintNFT("Ronaldo", "Footballer", "38");
mintNFT("Messi", "Footballer", "36");
mintNFT("John Cena", "Wrestler", "40");

// List the minted NFTs
console.log("List of Minted NFTs:");
listNFTs();

// Print the total number of minted NFTs
console.log("Total NFTs Minted:", getTotalSupply());
