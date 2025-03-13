"use client"
import { useState } from "react"
import { Calculator, DollarSign, CheckCircle, Clock, Phone, Facebook, Mail, MapPin,ArrowRight,ChevronDown } from 'lucide-react'
import Link from "next/link"
import Image from "next/image";

export default function ZaniCreditPage() {
  const [loanAmount, setLoanAmount] = useState("")
  const [repaymentAmount, setRepaymentAmount] = useState(null)
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const loanTypes = [
    {
      title: "Monthly Loans",
      description: "Flexible monthly repayment plans tailored to your budget",
      icon: <Clock className="h-10 w-10 text-white" />,
      color: "bg-gradient-to-r from-green-500 to-emerald-600"
    },
    {
      title: "Weekly Loans",
      description: "Short-term financing with convenient weekly payments",
      icon: <Calculator className="h-10 w-10 text-white" />,
      color: "bg-gradient-to-r from-blue-500 to-cyan-600"
    },
    {
      title: "Salary Advance",
      description: "Get access to your salary before payday when you need it most",
      icon: <DollarSign className="h-10 w-10 text-white" />,
      color: "bg-gradient-to-r from-purple-500 to-indigo-600"
    }
  ];


  const calculateLoan = (e) => {
    e.preventDefault()
    const amount = parseFloat(loanAmount)
    if (isNaN(amount) || amount <= 0) {
      alert("Please enter a valid loan amount")
      return
    }
    // Simple interest calculation (10% per month for this example)
    const interest = amount * 0.40
    const total = amount + interest
    setRepaymentAmount(total)
  }
  const date = new Date();
  let year = date.getFullYear()

  return (
       <div className="min-h-screen flex flex-col bg-gray-50 overflow-hidden">
      {/* Animated Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50 transition-all duration-300 ease-in-out">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="flex items-center mb-4 sm:mb-0">
              <h1 className="text-3xl font-bold bg-clip-text flex flex-row items-center justify-center text-transparent bg-gradient-to-r from-green-600 to-emerald-500">
              <img alt='logo' src='/ZANI.JPG' className='w-16 h-16'/>
              Zani Credit Solutions Ltd
              </h1>
            </div>
            <div className="flex flex-wrap justify-center sm:justify-end items-center gap-4">
              <a
                href="tel:09739036030"
                className="flex items-center text-gray-600 hover:text-green-600 transition-colors duration-300"
              >
                <Phone className="h-5 w-5 mr-2" />
                <span>09739036030</span>
              </a>
              <a
                href="mailto:zanicredit@gmail.com"
                className="flex items-center text-gray-600 hover:text-green-600 transition-colors duration-300"
              >
                <Mail className="h-5 w-5 mr-2" />
                <span>zanicredit@gmail.com</span>
              </a>
              <a
                href="https://www.facebook.com/ZaniCredit"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 hover:text-green-600 transition-colors duration-300"
              >
                <Facebook className="h-5 w-5 mr-2" />
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section with Background Image */}
        <div className="relative bg-gradient-to-r from-green-600 to-emerald-700 overflow-hidden">
          <div className="absolute inset-0 opacity-60" style={{ zIndex: 0 }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <Image
              src="/moneybg.jpg"
              alt="Money background"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
          <div
            className={`max-w-7xl mx-auto px-4 py-20 sm:py-32 sm:px-6 lg:px-8 relative transition-all duration-1000 ease-out transform `}
            style={{ zIndex: 1 }}
          >
            <div className="text-center text-white">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
                Small Loans, <span className="text-yellow-300">Big Opportunities</span>
              </h2>
              <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto">
                Rates as low as 10% - Receive up to K10,000 in minutes
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3 flex items-center">
                  <CheckCircle className="h-5 w-5 text-yellow-300 mr-2" />
                  <span>Quick Approval</span>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3 flex items-center">
                  <CheckCircle className="h-5 w-5 text-yellow-300 mr-2" />
                  <span>Minimal Documentation</span>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3 flex items-center">
                  <CheckCircle className="h-5 w-5 text-yellow-300 mr-2" />
                  <span>Flexible Terms</span>
                </div>
              </div>
              <a
                href="#calculator"
                className="inline-flex items-center px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                Calculate Your Loan <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
            <div className="absolute bottom-0 left-0 right-0 flex justify-center">
              <ChevronDown className="h-10 w-10 text-white animate-bounce" />
            </div>
          </div>
        </div>

        {/* Animated Loan Types Section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Our Loan Options</h2>
              <p className="mt-4 text-xl text-gray-600">Choose the loan type that fits your needs</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {loanTypes.map((loan, index) => (
                <div
                  key={index}
                  className={`rounded-xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-105`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className={`${loan.color} p-6`}>
                    <div className="rounded-full bg-white/20 w-16 h-16 flex items-center justify-center mb-4">
                      {loan.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">{loan.title}</h3>
                  </div>
                  <div className="p-6 bg-white">
                    <p className="text-gray-600">{loan.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Section with Tabs */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Why Choose ZaniCredit?</h2>
              <p className="mt-4 text-xl text-gray-600">We make borrowing simple, fast, and convenient</p>
            </div>

            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="flex border-b">
                <button
                  onClick={() => setActiveTab(0)}
                  className={`flex-1 py-4 px-6 text-center font-medium transition-colors duration-300 ${
                    activeTab === 0 ? "text-green-600 border-b-2 border-green-600" : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Easy Process
                </button>
                <button
                  onClick={() => setActiveTab(1)}
                  className={`flex-1 py-4 px-6 text-center font-medium transition-colors duration-300 ${
                    activeTab === 1 ? "text-green-600 border-b-2 border-green-600" : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Competitive Rates
                </button>
                <button
                  onClick={() => setActiveTab(2)}
                  className={`flex-1 py-4 px-6 text-center font-medium transition-colors duration-300 ${
                    activeTab === 2 ? "text-green-600 border-b-2 border-green-600" : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Customer Support
                </button>
              </div>

              <div className="p-6 min-h-[300px]">
                <div
                  className={`transition-opacity duration-500 ${activeTab === 0 ? "opacity-100" : "opacity-0 hidden"}`}
                >
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="md:w-1/2 relative h-60 w-full">
                      <Image
                        src="/i1.jpg"
                        alt="Easy loan process"
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <div className="md:w-1/2">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Simple 3-Step Process</h3>
                      <ul className="space-y-4">
                        <li className="flex items-start">
                          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                            <span className="text-green-600 font-bold text-sm">1</span>
                          </div>
                          <p className="text-gray-600">Apply with your NRC and collateral information</p>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                            <span className="text-green-600 font-bold text-sm">2</span>
                          </div>
                          <p className="text-gray-600">Get approved in minutes, not days</p>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                            <span className="text-green-600 font-bold text-sm">3</span>
                          </div>
                          <p className="text-gray-600">Receive your funds immediately</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div
                  className={`transition-opacity duration-500 ${activeTab === 1 ? "opacity-100" : "opacity-0 hidden"}`}
                >
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="md:w-1/2">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Competitive Interest Rates</h3>
                      <p className="text-gray-600 mb-4">
                        We offer some of the most competitive rates in the market, starting as low as 10% for qualified
                        borrowers.
                      </p>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex justify-between mb-2">
                          <span className="font-medium text-black">Monthly Loans</span>
                          <span className="font-bold text-green-600">From 10%</span>
                        </div>
                        <div className="flex justify-between mb-2">
                          <span className="font-medium text-black">Weekly Loans</span>
                          <span className="font-bold text-green-600">From 12%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium text-black">Salary Advance</span>
                          <span className="font-bold text-green-600">From 8%</span>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/2 relative h-60 w-full">
                      <Image
                        src="/i2.jpg"
                        alt="Competitive rates"
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </div>

                <div
                  className={`transition-opacity duration-500 ${activeTab === 2 ? "opacity-100" : "opacity-0 hidden"}`}
                >
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="md:w-1/2 relative h-60 w-full">
                      <Image
                        src="/i3.jpg"
                        alt="Customer support"
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <div className="md:w-1/2">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Dedicated Customer Support</h3>
                      <p className="text-gray-600 mb-4">
                        Our team is available to assist you throughout your loan journey, from application to repayment.
                      </p>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <Phone className="h-5 w-5 text-green-600 mr-2" />
                          <span className="text-black">Call us: 09739036030</span>
                        </div>
                        <div className="flex items-center">
                          <Mail className="h-5 w-5 text-green-600 mr-2" />
                          <span className="text-black">Email: zanicredit@gmail.com</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-5 w-5 text-green-600 mr-2" />
                          <span className="text-black">Visit: EW Tarrys Building, Cairo Road, Lusaka</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Loan Calculator Section */}
        <div id="calculator" className="py-16 bg-gradient-to-b from-white to-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Calculate Your Loan</h2>
              <p className="mt-4 text-xl text-gray-600">See how much you'll pay back after one month</p>
            </div>

            <div className="max-w-md mx-auto">
              <div className="bg-white shadow-2xl rounded-2xl overflow-hidden transform transition-all duration-500 hover:shadow-green-100">
                <div className="bg-gradient-to-r from-green-600 to-emerald-700 p-6 text-white">
                  <h3 className="text-2xl font-bold flex items-center">
                    <Calculator className="mr-3 h-6 w-6" />
                    Loan Calculator
                  </h3>
                  <p className="opacity-80">Find out your repayment amount</p>
                </div>
                <div className="p-6">
                  <form onSubmit={calculateLoan}>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label htmlFor="loanAmount" className="block text-sm font-medium text-gray-700">
                          Loan Amount (K)
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <span className="text-gray-500">K</span>
                          </div>
                          <input
                            id="loanAmount"
                            type="number"
                            placeholder="Enter amount"
                            value={loanAmount}
                            onChange={(e) => setLoanAmount(e.target.value)}
                            required
                            className="w-full pl-8 pr-3 py-3 border border-gray-300 text-black rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
                          />
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                      >
                        <Calculator className="mr-2 h-5 w-5" /> Calculate Repayment
                      </button>
                    </div>
                  </form>
                  {repaymentAmount !== null && (
                    <div className="mt-6 text-center bg-green-50 p-6 rounded-lg animate-fade-in">
                      <p className="text-lg font-semibold text-gray-700">Repayment Amount after 1 month:</p>
                      <p className="text-4xl font-bold text-green-600 mt-2">K{repaymentAmount.toFixed(2)}</p>
                      <p className="text-sm text-gray-500 mt-2">Includes 10% interest rate</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}

     

        {/* CTA Section */}
        <div className="py-16 bg-gradient-to-r from-green-600 to-emerald-700 relative overflow-hidden">
          <div className="absolute inset-0 opacity-60">
            <div className="absolute inset-0 bg-black"></div>
            <Image
              src="/moneybg.jpg"
              alt="Background pattern"
              fill
              className="object-cover"
            />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center text-white">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Apply today and get the funds you need in minutes. All you need is collateral and your NRC.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="#calculator"
                  className="px-8 py-4 bg-white text-green-700 font-bold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                >
                  Calculate Your Loan
                </a>
                <a
                  href="tel:09739036030"
                  className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-all duration-300"
                >
                  Call Us Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center mr-3">
                <img alt='logo' src='/ZANI.JPG' className='w-16 h-10'/>
                </div>
                <h3 className="text-xl font-bold text-white">Zani Credit Solutions Ltd</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Small loans, big opportunities. We provide quick and easy loans with competitive rates.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/ZaniCredit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8z" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
              <ul>
                {/* <li>
                  <Link href="/about" className="text-gray-400 hover:text-white block py-1">
                    About Us
                  </Link>
                </li>
                <li>S
                  <Link href="/services" className="text-gray-400 hover:text-white block py-1">
                    Services
                  </Link>
                </li> */}
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white block py-1">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
              <ul>
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white block py-1">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white block py-1">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 text-center">
            <p className="text-sm text-gray-500">© {new Date().getFullYear()} ZaniCredit. All rights reserved.</p>
            <p className="text-sm text-gray-500 flex items-center justify-center mt-4">
              <MapPin className="h-4 w-4 inline mr-1" />
              Shop number 38B, Arcades Shopping Mall, Lusaka
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}