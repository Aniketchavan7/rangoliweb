
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Image } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description?: string;
}

const Gallery = () => {
  const galleryItems: GalleryItem[] = [
    { 
      id: 1, 
      title: "Baby Shower Rangoli", 
      category: "celebration", 
      image: "/lovable-uploads/9eca4333-0b23-414b-9489-c29407b97cd9.png",
      description: "Colorful rangoli design for baby shower ceremony with baby illustration"
    },
    { 
      id: 2, 
      title: "Birthday Celebration", 
      category: "celebration", 
      image: "/lovable-uploads/3762b776-b3e6-4d05-b291-401f6226833b.png",
      description: "Beautiful peacock-themed birthday rangoli design with floral elements"
    },
    { 
      id: 3, 
      title: "Naming Ceremony", 
      category: "celebration", 
      image: "/lovable-uploads/be549bbf-4f38-41e9-9ba6-2ad03282010b.png",
      description: "Elegant rangoli for naming ceremony with traditional elements"
    },
    { 
      id: 7, 
      title: "Welcome Rangoli", 
      category: "welcome", 
      image: "/lovable-uploads/fbe2bae0-096d-491e-ad3f-662bdb6fc496.png",
      description: "Welcoming rangoli design with warm elements"
    },
    { 
      id: 8, 
      title: "Welcome Rangoli", 
      category: "welcome", 
      image: "/lovable-uploads/8d4e42c5-f89a-4e04-8cea-e86c04e09b73.png",
      description: "Elegant welcome rangoli with traditional motifs"
    },
    { 
      id: 9, 
      title: "Welcome Rangoli", 
      category: "welcome", 
      image: "/lovable-uploads/5f275702-f71a-414d-bdc9-cd760d15e429.png",
      description: "Welcoming rangoli design with intricate patterns"
    },
    { 
      id: 11, 
      title: "Happy Diwali", 
      category: "festival", 
      image: "/lovable-uploads/793948c3-3b00-4a22-91c5-f8a903a2cc44.png",
      description: "Festive Diwali rangoli celebration design"
    },
    { 
      id: 12, 
      title: "Festival Rangoli", 
      category: "festival", 
      image: "/lovable-uploads/c5990b42-47a2-4690-90ed-30cfd8e07be4.png",
      description: "Vibrant festival rangoli with scenic elements"
    },
    { 
      id: 13, 
      title: "Shivapuran Rangoli", 
      category: "festival", 
      image: "/lovable-uploads/3c43ac0d-1408-4202-be58-66cfbcc9735c.png",
      description: "Festival rangoli inspired by Shivapuran themes"
    },
    { 
      id: 14, 
      title: "Ganesh Rangoli", 
      category: "festival", 
      image: "/lovable-uploads/854b4b27-63ba-4247-8129-9590d0774e14.png",
      description: "Festive Ganesh-themed rangoli design"
    },
    { 
      id: 15, 
      title: "Artistic Rangoli", 
      category: "artistic", 
      image: "/lovable-uploads/91e5e13a-e3f5-46bb-a6a2-5739cf92f412.png",
      description: "Beautiful artistic rangoli design with flowing patterns"
    },
    { 
      id: 16, 
      title: "Artistic Rangoli", 
      category: "artistic", 
      image: "/lovable-uploads/7cb790d6-c72d-430f-8413-10c6fa32fc9b.png",
      description: "Scenic artistic rangoli with traditional elements"
    },
    { 
      id: 19, 
      title: "Welcome Rangoli with Kalash", 
      category: "welcome", 
      image: "/lovable-uploads/48b2726b-1bc8-4e88-abe6-1fcdfc0659ed.png",
      description: "Welcome rangoli featuring traditional kalash design"
    },
    { 
      id: 20, 
      title: "Personalized Wedding Rangoli", 
      category: "wedding", 
      image: "/lovable-uploads/82cae134-35f5-451e-a416-b4df1fdb3fd7.png",
      description: "Custom wedding rangoli with couple's photo and decorative elements"
    },
    { 
      id: 21, 
      title: "Traditional Wedding Welcome", 
      category: "wedding", 
      image: "/lovable-uploads/d06a5248-a20d-45f7-bfc9-8b3d89db6482.png",
      description: "Traditional welcome rangoli with musical instruments for wedding ceremony"
    },
    { 
      id: 22, 
      title: "Peacock Wedding Rangoli", 
      category: "wedding", 
      image: "/lovable-uploads/eb852a51-0e86-4733-be4b-c6a86d5cc6c4.png",
      description: "Colorful peacock-inspired wedding rangoli design"
    },
    { 
      id: 23, 
      title: "Heart Wedding Rangoli", 
      category: "wedding", 
      image: "/lovable-uploads/d9dcac13-0608-4a1d-a2e8-564a37047559.png",
      description: "Romantic heart-shaped wedding rangoli with curtain design"
    },
    { 
      id: 24, 
      title: "Heart Stage Rangoli", 
      category: "wedding", 
      image: "/lovable-uploads/c96a8cee-a0da-4ccc-a76e-0c845d44e6a1.png",
      description: "Heart-shaped wedding stage rangoli with couple's names"
    },
    { 
      id: 25, 
      title: "Musical Wedding Rangoli", 
      category: "wedding", 
      image: "/lovable-uploads/85cd04b6-d5bb-4de3-908b-cd7f286a1ca6.png",
      description: "Wedding rangoli with traditional musical instruments and colorful designs"
    },
    { 
      id: 26, 
      title: "Floral Heart Rangoli", 
      category: "wedding", 
      image: "/lovable-uploads/a64095ae-45fe-47d3-921d-84b006f5f970.png",
      description: "Heart-shaped wedding rangoli with beautiful floral decorations"
    },
    { 
      id: 27, 
      title: "Blue Swastik Welcome Rangoli", 
      category: "welcome", 
      image: "/lovable-uploads/8a702a2b-a0fa-44a9-9199-d7d0c17ae880.png",
      description: "Blue welcome rangoli with traditional swastik design and intricate border"
    },
    { 
      id: 28, 
      title: "Floral Welcome Rangoli", 
      category: "welcome", 
      image: "/lovable-uploads/b9fb82fc-f789-4629-8dea-c7720c1abb6f.png",
      description: "Welcome rangoli with red text and flower petal decorations"
    },
    { 
      id: 29, 
      title: "Paisley Welcome Rangoli", 
      category: "welcome", 
      image: "/lovable-uploads/d900ad81-c5ea-4816-9381-b9342712c142.png",
      description: "Yellow welcome rangoli with paisley designs and triangular elements"
    },
    { 
      id: 30, 
      title: "Red and Blue Welcome Rangoli", 
      category: "welcome", 
      image: "/lovable-uploads/1160f961-aaa2-49ce-bad2-0f70f7616167.png",
      description: "Colorful two-tone welcome rangoli with floral elements"
    },
    { 
      id: 31, 
      title: "Peacock-inspired Welcome", 
      category: "welcome", 
      image: "/lovable-uploads/002c7aa5-88a3-435e-9c4a-1d5341eaa435.png",
      description: "Creative peacock-inspired welcome rangoli with intricate white border"
    },
    { 
      id: 32, 
      title: "Circular Flower Welcome", 
      category: "welcome", 
      image: "/lovable-uploads/b370d5e0-f4fa-42cb-9ba9-5f71b8532318.png",
      description: "Yellow circular welcome rangoli with flower patterns and curly border"
    },
    { 
      id: 33, 
      title: "Gradient Welcome Rangoli", 
      category: "welcome", 
      image: "/lovable-uploads/929b05bd-b2af-41ea-8ea9-0ace7c257d9d.png",
      description: "Colorful gradient welcome rangoli with elegant fountain designs"
    },
    { 
      id: 34, 
      title: "Half-Circle Welcome Rangoli", 
      category: "welcome", 
      image: "/lovable-uploads/02b72e60-317e-4d2c-8c90-5070f964a71a.png",
      description: "Red half-circle welcome rangoli with delicate white border"
    },
    { 
      id: 35, 
      title: "Diamond Welcome Rangoli", 
      category: "welcome", 
      image: "/lovable-uploads/baa48bb4-27f3-41c9-abb5-fdcd49e0d90d.png",
      description: "Diamond-shaped welcome rangoli with green and colorful details"
    },
    { 
      id: 36, 
      title: "Kalash Welcome Rangoli", 
      category: "welcome", 
      image: "/lovable-uploads/3a412cd2-faad-4c19-b481-7ce2d9265a28.png",
      description: "Colorful welcome rangoli with traditional kalash and pan design"
    },
    { 
      id: 37, 
      title: "Traditional Border Welcome", 
      category: "welcome", 
      image: "/lovable-uploads/dbacebee-ef1a-46df-b38a-9fb01ea52da0.png",
      description: "Traditional welcome rangoli with intricate spiral border design"
    },
    { 
      id: 38, 
      title: "Leaf and Kalash Festival Rangoli", 
      category: "festival", 
      image: "/lovable-uploads/4854f16c-effb-432b-84d5-7a680848aad9.png",
      description: "Yellow festival rangoli with leaf and traditional kalash design with red border"
    },
    { 
      id: 39, 
      title: "Lakshmi Pada Festival Rangoli", 
      category: "festival", 
      image: "/lovable-uploads/a95bd3a1-ac42-4f82-af19-57a215d30d11.png",
      description: "Colorful circular rangoli with symbolic Lakshmi feet in the center"
    },
    { 
      id: 40, 
      title: "Sanskrit Script Festival Rangoli", 
      category: "festival", 
      image: "/lovable-uploads/fcecada0-315f-445d-8c11-314ab04f5299.png",
      description: "Red and green festival rangoli with Sanskrit script and traditional borders"
    },
    { 
      id: 41, 
      title: "Lord Shiva Festival Rangoli", 
      category: "festival", 
      image: "/lovable-uploads/8dcae06f-d698-4f8c-b1fd-705aef7f986c.png",
      description: "Vibrant festival rangoli depicting Lord Shiva symbolism with yellow-orange gradient"
    },
    { 
      id: 42, 
      title: "Shivling Festival Rangoli", 
      category: "festival", 
      image: "/lovable-uploads/cc144c6f-e64f-4fdb-ac0c-c78108b1a87a.png",
      description: "Red and purple festival rangoli with Shivling and trident symbols"
    },
    { 
      id: 43, 
      title: "Puja Offerings Festival Rangoli", 
      category: "festival", 
      image: "/lovable-uploads/6780dcce-2a41-4a07-b38e-e1eee3bd210c.png",
      description: "Festival rangoli showing puja offerings with jewelry and decorative borders"
    },
    { 
      id: 44, 
      title: "Sanskrit Blessing Rangoli", 
      category: "festival", 
      image: "/lovable-uploads/b58f9cd4-ccda-4e0c-abda-194ac7285136.png",
      description: "Green festival rangoli with Sanskrit blessing in pink circle and intricate white border"
    },
  ];

  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const categories = [...new Set(galleryItems.map(item => item.category))];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const openImageDialog = (item: GalleryItem) => {
    setSelectedImage(item);
    setDialogOpen(true);
  };

  const closeImageDialog = () => {
    setDialogOpen(false);
    setTimeout(() => setSelectedImage(null), 300);
  };

  const renderGalleryItems = (items: GalleryItem[]) => {
    return items.map((item) => (
      <motion.div 
        key={item.id} 
        className="rangoli-card group overflow-hidden cursor-pointer"
        variants={itemVariants}
        onClick={() => openImageDialog(item)}
        aria-label={`View larger image of ${item.title}`}
      >
        <div className="w-full h-64 overflow-hidden rounded-lg mb-4 relative">
          <img 
            src={item.image} 
            alt={item.title} 
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
          />
          {/* Watermark */}
          <div className="absolute bottom-2 right-2 text-white text-opacity-70 text-sm font-dancing rotate-[-5deg] drop-shadow-md pointer-events-none">
            akanksha-creations
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-rangoli-purple/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
            <div className="p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-sm capitalize">{item.category}</p>
              <div className="flex items-center gap-2 mt-2">
                <Image className="h-5 w-5" />
                <span>Click to enlarge</span>
              </div>
            </div>
          </div>
        </div>
        <h3 className="text-xl font-bold text-rangoli-purple">{item.title}</h3>
        <p className="text-sm text-gray-500 capitalize">{item.category}</p>
      </motion.div>
    ));
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-rangoli-purple mb-4">Our Rangoli Gallery</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Select a category below to explore our beautiful rangoli designs created by Akanksha Creations.
            Each design is handcrafted with precision and creativity for various occasions.
          </p>
        </div>

        <Tabs defaultValue="" className="w-full">
          <div className="flex justify-center mb-8 overflow-x-auto">
            <TabsList className="bg-rangoli-cream border border-rangoli-purple/10 p-1 flex flex-wrap justify-center">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category}
                  value={category}
                  className="data-[state=active]:bg-rangoli-purple data-[state=active]:text-white capitalize"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {categories.map((category) => (
            <TabsContent key={category} value={category} className="mt-0">
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {renderGalleryItems(galleryItems.filter(item => item.category === category))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      <Dialog open={dialogOpen} onOpenChange={closeImageDialog}>
        <DialogContent className="max-w-5xl w-[95vw] p-0 overflow-hidden bg-black">
          {selectedImage && (
            <div className="flex flex-col w-full">
              <DialogTitle className="sr-only">{selectedImage.title}</DialogTitle>
              <div className="relative w-full h-[80vh] flex items-center justify-center">
                <img 
                  src={selectedImage.image} 
                  alt={selectedImage.title}
                  className="max-w-full max-h-full object-contain" 
                  style={{ 
                    aspectRatio: 'auto', 
                    maxWidth: '100%', 
                    maxHeight: '100%',
                    objectFit: 'contain',
                    objectPosition: 'center'
                  }}
                />
                {/* Watermark for the enlarged image */}
                <div className="absolute bottom-4 right-4 text-white text-opacity-80 text-lg font-dancing rotate-[-5deg] drop-shadow-lg pointer-events-none">
                  akanksha-creations
                </div>
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold text-rangoli-purple">{selectedImage.title}</h3>
                <p className="text-sm text-gray-500 capitalize">{selectedImage.category}</p>
                {selectedImage.description && (
                  <p className="text-gray-700 mt-2">{selectedImage.description}</p>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;
