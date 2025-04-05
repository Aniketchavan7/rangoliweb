import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Send, Sparkles } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const EnquiryForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [enquiryType, setEnquiryType] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!name || !phone || !enquiryType) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    const enquiryMessage = encodeURIComponent(
      `*New Class Enquiry*\n\n` +
      `*Name:* ${name}\n` +
      `*Phone:* ${phone}\n` +
      `*Enquiry For:* ${enquiryType}\n` +
      `*Message:* ${message || 'No additional message'}`
    );

    const whatsappUrl = `https://wa.me/919665493102?text=${enquiryMessage}`;
    window.open(whatsappUrl, '_blank');

    setName('');
    setPhone('');
    setEnquiryType('');
    setMessage('');
    setIsSubmitting(false);

    toast({
      title: "Enquiry sent successfully!",
      description: "We'll get back to you shortly with class details.",
    });
  };

  return (
    <section id="enquiry" className="py-20 bg-gradient-to-r from-rangoli-purple/10 to-rangoli-pink/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sparkles className="text-rangoli-orange h-8 w-8" />
            <h2 className="text-4xl font-bold text-rangoli-purple">Learn the Art of Rangoli</h2>
            <Sparkles className="text-rangoli-orange h-8 w-8" />
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join Akanksha Creations and learn the beautiful art of rangoli from experienced artists. 
            Fill out the form below to enquire about our classes and workshops.
          </p>
        </div>

        <div className="max-w-2xl mx-auto rangoli-card">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-rangoli-purple">
                  Your Name *
                </label>
                <Input 
                  id="name" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  placeholder="Enter your full name" 
                  required 
                  className="border-rangoli-purple/20 focus:border-rangoli-purple"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-rangoli-purple">
                  Phone Number *
                </label>
                <Input 
                  id="phone" 
                  value={phone} 
                  onChange={(e) => setPhone(e.target.value)} 
                  placeholder="Enter your contact number" 
                  required 
                  className="border-rangoli-purple/20 focus:border-rangoli-purple"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="enquiryType" className="text-sm font-medium text-rangoli-purple">
                Enquiry For *
              </label>
              <Select value={enquiryType} onValueChange={setEnquiryType} required>
                <SelectTrigger className="border-rangoli-purple/20 focus:border-rangoli-purple">
                  <SelectValue placeholder="Select class type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="beginner_classes">Beginner Classes</SelectItem>
                  <SelectItem value="advanced_classes">Advanced Classes</SelectItem>
                  <SelectItem value="kids_workshop">Kids Workshop</SelectItem>
                  <SelectItem value="special_occasion">Special Occasion Workshop</SelectItem>
                  <SelectItem value="corporate_workshop">Corporate Workshop</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-rangoli-purple">
                Additional Message
              </label>
              <Textarea 
                id="message" 
                value={message} 
                onChange={(e) => setMessage(e.target.value)} 
                placeholder="Any specific questions or requirements?" 
                rows={4} 
                className="border-rangoli-purple/20 focus:border-rangoli-purple"
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-rangoli-pink hover:bg-rangoli-purple text-white flex items-center justify-center gap-2 py-6"
              disabled={isSubmitting}
            >
              <Send size={16} />
              {isSubmitting ? "Sending..." : "Send Enquiry via WhatsApp"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EnquiryForm;
