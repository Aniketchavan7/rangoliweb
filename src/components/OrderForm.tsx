import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CalendarIcon, Send } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { useToast } from '@/components/ui/use-toast';

const OrderForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [occasion, setOccasion] = useState('');
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [requirements, setRequirements] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!name || !phone || !occasion || !date) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    const message = encodeURIComponent(
      `*New Rangoli Order*\n\n` +
      `*Name:* ${name}\n` +
      `*Phone:* ${phone}\n` +
      `*Occasion:* ${occasion}\n` +
      `*Date:* ${format(date, 'PPP')}\n` +
      `*Requirements:* ${requirements || 'None'}`
    );

    const whatsappUrl = `https://wa.me/919665493102?text=${message}`;
    
    window.open(whatsappUrl, '_blank');

    setName('');
    setPhone('');
    setOccasion('');
    setDate(undefined);
    setRequirements('');
    setIsSubmitting(false);

    toast({
      title: "Order sent successfully!",
      description: "We'll contact you shortly to confirm your booking.",
    });
  };

  return (
    <section id="order" className="py-20 bg-rangoli-purple/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-rangoli-purple mb-4">Book a Rangoli Design</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Fill out the form below to place an order for a rangoli design. 
            We'll contact you via WhatsApp to confirm your booking and provide payment details.
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
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="occasion" className="text-sm font-medium text-rangoli-purple">
                Occasion Type *
              </label>
              <Select value={occasion} onValueChange={setOccasion} required>
                <SelectTrigger>
                  <SelectValue placeholder="Select an occasion" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="wedding">Wedding</SelectItem>
                  <SelectItem value="engagement">Engagement</SelectItem>
                  <SelectItem value="diwali">Diwali</SelectItem>
                  <SelectItem value="ganesh_chaturthi">Ganesh Chaturthi</SelectItem>
                  <SelectItem value="housewarming">Housewarming</SelectItem>
                  <SelectItem value="corporate">Corporate Event</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label htmlFor="date" className="text-sm font-medium text-rangoli-purple">
                Preferred Date *
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full pl-3 text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    {date ? format(date, "PPP") : "Pick a date"}
                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    disabled={(date) => date < new Date()}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2">
              <label htmlFor="requirements" className="text-sm font-medium text-rangoli-purple">
                Custom Requirements
              </label>
              <Textarea 
                id="requirements" 
                value={requirements} 
                onChange={(e) => setRequirements(e.target.value)} 
                placeholder="Any specific colors, themes, or size requirements?" 
                rows={4} 
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-rangoli-orange hover:bg-rangoli-purple text-white flex items-center justify-center gap-2"
              disabled={isSubmitting}
            >
              <Send size={16} />
              {isSubmitting ? "Sending..." : "Send Order to WhatsApp"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default OrderForm;
