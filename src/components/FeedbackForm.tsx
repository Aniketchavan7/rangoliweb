import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { CheckIcon, Send } from 'lucide-react';

const FeedbackForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!name || !message || !rating) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields and provide a rating",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    const feedbackMessage = encodeURIComponent(
      `*New Feedback Submission*\n\n` +
      `*Name:* ${name}\n` +
      `*Email:* ${email || 'Not provided'}\n` +
      `*Rating:* ${'★'.repeat(rating)} (${rating}/5)\n` +
      `*Message:* ${message}`
    );

    const whatsappUrl = `https://wa.me/919665493102?text=${feedbackMessage}`;
    window.open(whatsappUrl, '_blank');

    setName('');
    setEmail('');
    setMessage('');
    setRating(null);
    setIsSubmitting(false);

    toast({
      title: "Feedback sent successfully!",
      description: "Thank you for sharing your experience with us.",
    });
  };

  return (
    <section id="feedback" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-rangoli-purple mb-4">Share Your Experience</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We value your feedback! Let us know about your experience with our rangoli designs or classes.
          </p>
        </div>

        <div className="max-w-2xl mx-auto flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <div className="rangoli-card h-full">
              <h3 className="text-2xl font-bold text-rangoli-purple mb-4">Recent Feedbacks</h3>
              
              <div className="space-y-6">
                {/* Sample feedback items - in a real application, these would come from a database */}
                <div className="border-b pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-medium">Priya Sharma</p>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span key={star} className="text-rangoli-gold">★</span>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">
                    The rangoli design created for my daughter's wedding was absolutely stunning! 
                    Everyone complimented it. Thank you Akansh Creations!
                  </p>
                </div>
                
                <div className="border-b pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-medium">Rahul Patel</p>
                    <div className="flex">
                      {[1, 2, 3, 4].map((star) => (
                        <span key={star} className="text-rangoli-gold">★</span>
                      ))}
                      <span className="text-gray-300">★</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">
                    I took their rangoli classes and learned so much. The teacher was very patient 
                    and taught us many techniques. Highly recommended!
                  </p>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-medium">Sneha Desai</p>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span key={star} className="text-rangoli-gold">★</span>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">
                    The Diwali special rangoli was the centerpiece of our celebration. 
                    Very professional service and beautiful designs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            <div className="rangoli-card">
              <h3 className="text-2xl font-bold text-rangoli-purple mb-4">Leave Your Feedback</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-rangoli-purple">
                    Your Name *
                  </label>
                  <Input 
                    id="name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    placeholder="Enter your name" 
                    required 
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-rangoli-purple">
                    Email (optional)
                  </label>
                  <Input 
                    id="email" 
                    type="email"
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="Enter your email" 
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-rangoli-purple">
                    Rating *
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                          rating && star <= rating 
                            ? 'bg-rangoli-gold text-white' 
                            : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
                        }`}
                      >
                        {star}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-rangoli-purple">
                    Your Feedback *
                  </label>
                  <Textarea 
                    id="message" 
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)} 
                    placeholder="Share your experience with our services" 
                    rows={4} 
                    required 
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-rangoli-purple hover:bg-rangoli-pink text-white flex items-center justify-center gap-2"
                  disabled={isSubmitting}
                >
                  <Send size={16} />
                  {isSubmitting ? "Sending..." : "Send Feedback via WhatsApp"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedbackForm;
