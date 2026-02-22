import React, { useState } from 'react';
import { TrendingUp, Leaf, Users, Send, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { mockData, mockFormSubmit } from '../mock';
import { useToast } from '../hooks/use-toast';

const iconMap = {
  'trending-up': TrendingUp,
  leaf: Leaf,
  users: Users,
};

const Contact = () => {
  const { contact } = mockData;
  const { toast } = useToast();

  const [selectedType, setSelectedType] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await mockFormSubmit({
        ...formData,
        inquiryType: selectedType,
      });

      if (result.success) {
        setSubmitted(true);
        toast({
          title: 'Inquiry Submitted',
          description: result.message,
        });

        setTimeout(() => {
          setSubmitted(false);
          setFormData({ name: '', email: '', company: '', message: '' });
          setSelectedType('');
        }, 3000);
      }
    } catch {
      toast({
        title: 'Error',
        description: 'Something went wrong. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 overflow-hidden bg-neutral-950"
    >
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-emerald-900/70" />

      {/* Soft emerald glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(16,185,129,0.25),transparent_60%)]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-emerald-950/50 border border-emerald-700/30 rounded-full px-4 py-2 mb-6">
            <Users size={16} className="text-emerald-400" />
            <span className="text-emerald-400 text-sm font-medium">
              Get In Touch
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {contact.title}
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            {contact.subtitle}
          </p>
        </div>

        {/* Inquiry Types */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contact.types.map((type, index) => {
            const Icon = iconMap[type.icon] || Users;
            const isSelected = selectedType === type.title;

            return (
              <button
                key={index}
                onClick={() => setSelectedType(type.title)}
                className={`p-8 rounded-xl border-2 transition-all text-left backdrop-blur-md ${
                  isSelected
                    ? 'bg-emerald-950/60 border-emerald-600'
                    : 'bg-neutral-900/70 border-neutral-800 hover:border-emerald-700/50'
                }`}
              >
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
                    isSelected
                      ? 'bg-emerald-600'
                      : 'bg-emerald-950/50 border border-emerald-700/30'
                  }`}
                >
                  <Icon
                    size={24}
                    className={isSelected ? 'text-white' : 'text-emerald-400'}
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {type.title}
                </h3>
                <p className="text-sm text-neutral-400">
                  {type.description}
                </p>
              </button>
            );
          })}
        </div>

        {/* Form */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-neutral-900/80 border border-neutral-800 backdrop-blur-md rounded-2xl p-8 md:p-12">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={40} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Thank You!
                </h3>
                <p className="text-neutral-400">
                  We’ll get back to you within 24–48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label className="text-white mb-2 block">
                      Full Name *
                    </Label>
                    <Input
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-neutral-950 border-neutral-700 text-white focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <Label className="text-white mb-2 block">
                      Email *
                    </Label>
                    <Input
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-neutral-950 border-neutral-700 text-white focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div>
                  <Label className="text-white mb-2 block">
                    Company / Organization *
                  </Label>
                  <Input
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleInputChange}
                    className="bg-neutral-950 border-neutral-700 text-white focus:border-emerald-500"
                  />
                </div>

                <div>
                  <Label className="text-white mb-2 block">
                    Message *
                  </Label>
                  <Textarea
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-neutral-950 border-neutral-700 text-white focus:border-emerald-500 resize-none"
                  />
                </div>

                {!selectedType && (
                  <p className="text-amber-400 text-sm">
                    Please select an inquiry type above
                  </p>
                )}

                <Button
                  type="submit"
                  disabled={!selectedType || isSubmitting}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-6 text-lg"
                >
                  {isSubmitting ? 'Submitting…' : (
                    <>
                      Submit Inquiry
                      <Send size={20} className="ml-2" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;