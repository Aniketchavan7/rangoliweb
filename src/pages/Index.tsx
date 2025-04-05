
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Gallery from '@/components/Gallery';
import OrderForm from '@/components/OrderForm';
import EnquiryForm from '@/components/EnquiryForm';
import FeedbackForm from '@/components/FeedbackForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Gallery />
        <OrderForm />
        <EnquiryForm />
        <FeedbackForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
