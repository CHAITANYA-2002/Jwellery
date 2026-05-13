import { type User, type InsertUser, type Product, type InsertProduct } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Product Operations
  getProducts(): Promise<Product[]>;
  getProduct(id: string): Promise<Product | undefined>;
  createProduct(product: InsertProduct): Promise<Product>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private products: Map<string, Product>;

  constructor() {
    this.users = new Map();
    this.products = new Map();
    
    // Pre-populate default luxury products
    const defaultProducts: Product[] = [
      {
        id: "aurelius-band",
        category: "Rings",
        name: "Aurelius Band",
        description: "Hand-hammered 22k gold with a whispered patina of antiquity.",
        price: "$980",
        image: "/figmaAssets2/product-aurelius-band.png",
        isNew: true,
      },
      {
        id: "mani-link-chain",
        category: "Necklaces",
        name: "Mani Link Chain",
        description: "Each link forged individually, carrying the mark of its maker.",
        price: "$1,240",
        image: "/figmaAssets2/product-mani-link-chain.png",
        isNew: true,
      },
      {
        id: "gilded-drift-cuff",
        category: "Cuffs & Bangles",
        name: "Gilded Drift Cuff",
        description: "Molten gold shaped by hand — no two are exactly alike.",
        price: "$740",
        image: "/figmaAssets2/product-gilded-drift-cuff.png",
        isNew: true,
      },
      {
        id: "unisex-gold-bracelet",
        category: "Bracelets",
        name: "Unisex Gold Bracelet",
        description: "A timeless unisex statement, meticulously balanced with heavy solid gold links.",
        price: "$1,420",
        image: "/products/bracelet-unisex-1.jpg",
        isNew: true,
      },
      {
        id: "golden-bar-pendant",
        category: "Pendants",
        name: "The Golden Bar Pendant",
        description: "A sleek, architectural vertical gold bar with subtle hand-struck facets.",
        price: "$850",
        image: "/products/pendant-bar-1.jpg",
        isNew: true,
      },
      {
        id: "heritage-fish-pendant",
        category: "Pendants",
        name: "Heritage Fish Pendant",
        description: "A symbolic heritage fish motif, intricately carved with exquisite attention to detail.",
        price: "$920",
        image: "/products/pendant-fish-1.jpg",
        isNew: true,
      },
      {
        id: "aurelius-chain",
        category: "Necklaces",
        name: "The Aurelius Chain",
        description: "A heritage link necklace cast in 18k gold-plated silver alloy.",
        price: "$1,240",
        image: "/figmaAssets/the-aurelius-chain---detailed-gold-link-necklace.png",
        isNew: false,
      },
      {
        id: "molten-hoops",
        category: "Rings",
        name: "Molten Hoops",
        description: "Textured gold earrings sculpted to capture light in motion.",
        price: "$890",
        image: "/figmaAssets/molten-hoops---textured-gold-earrings.png",
        isNew: false,
      },
      {
        id: "oro-signet",
        category: "Rings",
        name: "Oro Signet Ring",
        description: "A bold signet with hand-engraved heritage motifs in solid gold.",
        price: "$1,080",
        image: "/figmaAssets/close-up-of-artisanal-gold-jewelry-on-a-person.png",
        isNew: false,
      },
    ];

    for (const prod of defaultProducts) {
      this.products.set(prod.id, prod);
    }
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Product Operations
  async getProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getProduct(id: string): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async createProduct(insertProd: InsertProduct): Promise<Product> {
    const id = insertProd.id || randomUUID();
    const product: Product = {
      id,
      category: insertProd.category,
      name: insertProd.name,
      description: insertProd.description,
      price: insertProd.price,
      image: insertProd.image,
      isNew: insertProd.isNew ?? true,
    };
    this.products.set(id, product);
    return product;
  }
}

export const storage = new MemStorage();
