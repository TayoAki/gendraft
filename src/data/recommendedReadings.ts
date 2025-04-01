
// Central storage for recommended reading data

export interface Book {
  id: number;
  title: string;
  author: string;
  description: string;
  imageUrl: string;
  category?: string;
  link?: string;
}

// Books for Community page
export const communityBooks: Book[] = [
  {
    id: 1,
    title: "The Body Keeps the Score",
    author: "Bessel van der Kolk",
    description: "Explores how trauma affects the body and mind, and innovative treatments that help patients reclaim their lives.",
    imageUrl: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  }, 
  {
    id: 2,
    title: "How Not to Die",
    author: "Michael Greger, MD",
    description: "Examines the role diet plays in preventing, treating, and reversing diseases.",
    imageUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  }, 
  {
    id: 3,
    title: "Being Mortal",
    author: "Atul Gawande",
    description: "A thoughtful exploration of aging, death, and the goals of medicine in enhancing life.",
    imageUrl: "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  }
];

// Books for Resources page
export const resourcesBooks: Book[] = [
  {
    id: 1,
    title: "The Patient's Playbook",
    author: "Leslie D. Michelson",
    description: "How to save your life and the lives of those you love. Essential guidance for navigating health decisions.",
    imageUrl: "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "Patient Advocacy"
  },
  {
    id: 2,
    title: "Breath",
    author: "James Nestor",
    description: "The new science of a lost art. Explores how breathing properly can improve health and performance.",
    imageUrl: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "Wellness"
  },
  {
    id: 3,
    title: "Why We Sleep",
    author: "Matthew Walker",
    description: "Unlocking the power of sleep and dreams. The importance of sleep for health and longevity.",
    imageUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    category: "Health Science"
  }
];
