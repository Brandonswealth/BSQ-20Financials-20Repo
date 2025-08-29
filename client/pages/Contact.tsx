import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Phone, 
  Mail, 
  MapPin,
  Calendar,
  MessageSquare,
  Clock,
  CheckCircle,
  ExternalLink
} from "lucide-react";

const CALENDLY = "https://calendly.com/brandonswealth/15min";
const PHONE = "888-305-9390";
const ADDRESS_LINE = "1050 E Flamingo Rd, S107";
const ADDRESS_CITY = "Las Vegas, Nevada 89119";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    serviceInterest: "",
    helpNeeded: "",
    message: "",
    preferredContact: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thanks! We'll reach out within 24 hours with next steps.");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      serviceInterest: "",
      helpNeeded: "",
      message: "",
      preferredContact: ""
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <section className="bg-gradient-to-r from-brand-blue-light to-brand-blue-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-white/20 text-white border-white/30 mb-4">Get In Touch</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Contact BSQ Financials</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Tell us what you need help with and our team will follow up quickly.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <Card className="p-8 border-2 border-brand-blue">
              <CardHeader className="text-center pb-6">
                <Calendar className="h-16 w-16 text-brand-blue mx-auto mb-4" />
                <CardTitle className="text-2xl">Free 15-Minute Consultation</CardTitle>
                <CardDescription className="text-lg">Book a quick call to discuss your goals</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  {[
                    "No obligation discussion",
                    "Personalized recommendations",
                    "Expert financial guidance",
                    "Clear next steps",
                  ].map((t) => (
                    <div key={t} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full bg-gradient-to-r from-brand-blue-light to-brand-blue-dark text-lg py-6" asChild>
                  <a href={CALENDLY} target="_blank" rel="noopener noreferrer">
                    <Calendar className="mr-2 h-5 w-5" />
                    Schedule Free Consultation
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardHeader className="text-center pb-6">
                <MessageSquare className="h-16 w-16 text-brand-blue mx-auto mb-4" />
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                <CardDescription className="text-lg">We respond within 24 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" value={formData.firstName} onChange={(e) => handleInputChange("firstName", e.target.value)} required />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" value={formData.lastName} onChange={(e) => handleInputChange("lastName", e.target.value)} required />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" value={formData.email} onChange={(e) => handleInputChange("email", e.target.value)} required />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" value={formData.phone} onChange={(e) => handleInputChange("phone", e.target.value)} />
                  </div>
                  <div>
                    <Label>What service are you interested in?</Label>
                    <Select value={formData.serviceInterest} onValueChange={(v) => handleInputChange("serviceInterest", v)}>
                      <SelectTrigger><SelectValue placeholder="Select a service" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="credit-repair">Personal Credit Repair</SelectItem>
                        <SelectItem value="business-funding">Business Funding & Setup</SelectItem>
                        <SelectItem value="cfo-services">CFO Services</SelectItem>
                        <SelectItem value="financial-planning">Financial Planning</SelectItem>
                        <SelectItem value="debt-consolidation">Debt Consolidation</SelectItem>
                        <SelectItem value="not-sure">Not Sure - Need Guidance</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>What do you need help with? *</Label>
                    <Select value={formData.helpNeeded} onValueChange={(v) => handleInputChange("helpNeeded", v)} required>
                      <SelectTrigger><SelectValue placeholder="Choose one" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="improve-credit-score">Improve my credit score</SelectItem>
                        <SelectItem value="remove-negative-items">Remove negative items</SelectItem>
                        <SelectItem value="start-business">Start a new business</SelectItem>
                        <SelectItem value="business-funding">Get business funding</SelectItem>
                        <SelectItem value="cfo-advisory">CFO advisory</SelectItem>
                        <SelectItem value="housing-assistance">Housing/apartment placement</SelectItem>
                        <SelectItem value="general-consultation">General consultation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="message">Additional Details (Optional)</Label>
                    <Textarea id="message" rows={4} value={formData.message} onChange={(e) => handleInputChange("message", e.target.value)} placeholder="Tell us more about your situation, goals, or questions..." />
                  </div>
                  <div>
                    <Label>Preferred Contact Method</Label>
                    <Select value={formData.preferredContact} onValueChange={(v) => handleInputChange("preferredContact", v)}>
                      <SelectTrigger><SelectValue placeholder="Choose one" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="email">Email</SelectItem>
                        <SelectItem value="phone">Phone Call</SelectItem>
                        <SelectItem value="text">Text Message</SelectItem>
                        <SelectItem value="no-preference">No Preference</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button type="submit" className="w-full bg-gradient-to-r from-brand-blue-light to-brand-blue-dark" disabled={!formData.firstName || !formData.lastName || !formData.email || !formData.helpNeeded}>Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Direct contact cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center p-8">
              <CardHeader className="pb-6">
                <Phone className="h-12 w-12 text-brand-blue mx-auto mb-4" />
                <CardTitle className="text-xl">Phone</CardTitle>
                <CardDescription>Speak with our team directly</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-brand-blue mb-2">{PHONE}</p>
                <p className="text-gray-600 text-sm">Mon–Fri: 9AM - 6PM PST</p>
                <p className="text-gray-600 text-sm">Sat: 10AM - 4PM PST</p>
              </CardContent>
            </Card>

            <Card className="text-center p-8">
              <CardHeader className="pb-6">
                <Mail className="h-12 w-12 text-brand-blue mx-auto mb-4" />
                <CardTitle className="text-xl">Email</CardTitle>
                <CardDescription>We respond within 24 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-bold text-brand-blue mb-2">info@bsqfinancials.com</p>
                <p className="text-gray-600 text-sm">Include your phone number for faster response</p>
              </CardContent>
            </Card>

            <Card className="text-center p-8">
              <CardHeader className="pb-6">
                <MapPin className="h-12 w-12 text-brand-blue mx-auto mb-4" />
                <CardTitle className="text-xl">Address</CardTitle>
                <CardDescription>Visit our office (by appointment)</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-bold text-brand-blue mb-2">{ADDRESS_LINE}</p>
                <p className="text-gray-600">{ADDRESS_CITY}</p>
              </CardContent>
            </Card>
          </div>

          <Card className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-brand-blue-light to-brand-blue-dark text-white">
            <CardContent className="text-center">
              <Clock className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Our Response Commitment</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold mb-2">24 Hours</div>
                  <div className="text-blue-100">Email Response</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">Same Day</div>
                  <div className="text-blue-100">Phone Returns</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">15 Minutes</div>
                  <div className="text-blue-100">Free Consultation</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
