// Mock quote data for playground testing

export const MOCK_QUOTES: Quote[] = [
  {
    id: 1,
    text: "The quick brown fox jumps over the lazy dog.",
    source: "Classic Pangram",
    type: "sentence",
    author: "Unknown",
    created_at: new Date(),
    updated_at: new Date(),
    lengthWord: "short",
    isFavorite: false,
  },
  {
    id: 2,
    text: "To be or not to be, that is the question. Whether 'tis nobler in the mind to suffer the slings and arrows of outrageous fortune, or to take arms against a sea of troubles and by opposing end them.",
    source: "Hamlet",
    type: "quote",
    author: "William Shakespeare",
    created_at: new Date(),
    updated_at: new Date(),
    lengthWord: "medium",
    isFavorite: false,
  },
  {
    id: 3,
    text: "In the beginning was the Word, and the Word was with God, and the Word was God. The same was in the beginning with God. All things were made by him; and without him was not any thing made that was made. In him was life; and the life was the light of men. And the light shineth in the darkness; and the darkness comprehended it not.",
    source: "Bible",
    type: "verse",
    author: "John 1:1-5",
    created_at: new Date(),
    updated_at: new Date(),
    lengthWord: "long",
    isFavorite: true,
  },
  {
    id: 4,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    source: "Lorem Ipsum",
    type: "placeholder",
    author: "Unknown",
    created_at: new Date(),
    updated_at: new Date(),
    lengthWord: "medium",
    isFavorite: false,
  },
  {
    id: 5,
    text: "Hello world!",
    source: "Programming",
    type: "phrase",
    author: "Every Developer",
    created_at: new Date(),
    updated_at: new Date(),
    lengthWord: "short",
    isFavorite: false,
  },
];

// Mock actions for playground (they don't actually save anything)
export const playgroundActions = {
  savePlayStats: async (stats: any, quoteId: number) => {
    console.log("Playground - Mock savePlayStats:", { stats, quoteId });
    return Promise.resolve(Math.floor(Math.random() * 1000));
  },
  
  addQuoteToFavorites: async (quoteId: number) => {
    console.log("Playground - Mock addQuoteToFavorites:", quoteId);
    return Promise.resolve({
      status: "success",
      message: "Quote added to favorites (playground mode)",
    });
  },
  
  removeQuoteFromFavorites: async (quoteId: number) => {
    console.log("Playground - Mock removeQuoteFromFavorites:", quoteId);
    return Promise.resolve({
      status: "success", 
      message: "Quote removed from favorites (playground mode)",
    });
  },
};

export const DEFAULT_PLAYGROUND_SETTINGS = {
  has3D: true,
  isFavorite: false,
};
