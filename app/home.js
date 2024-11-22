"use client"

import { useState } from "react"
import { Calculator, DollarSign, CheckCircle, Clock, Phone, Facebook, Mail, MapPin } from 'lucide-react'
import Link from "next/link"

export default function ZaniCreditPage() {
  const [loanAmount, setLoanAmount] = useState("")
  const [repaymentAmount, setRepaymentAmount] = useState(null)

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
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-4">
            <h1 className="text-3xl font-bold text-gray-900 flex items-center mb-4 sm:mb-0">
            <img alt='logo' src='/ZANI.JPG' className='w-16 h-16'/>
              Zani Credit Solutions Ltd
            </h1>
            <div className="flex flex-wrap justify-center sm:justify-end items-center gap-4">
              <a href="tel:09739036030" className="flex items-center text-gray-600 hover:text-green-600">
                <Phone className="h-5 w-5 mr-2" />
                <span>09739036030</span>
              </a>
              <a href="mailto:zanicredit@gmail.com" className="flex items-center text-gray-600 hover:text-green-600">
                <Mail className="h-5 w-5 mr-2" />
                <span>zanicredit@gmail.com</span>
              </a>
              <a href="https://www.facebook.com/share/Xbmt5fJyrkq9WoKj/" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-green-600">
                <Facebook className="h-5 w-5 mr-2" />
                <span>Facebook</span>
              </a>
            </div>
          </div>
          <p className="text-sm text-gray-600 text-center sm:text-left">Quick and easy loans</p>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Small Loans, Big Opportunities</h2>
          <p className="text-xl text-gray-600 mb-8">Rates as low as 10% - Receive up to K10,000 in minutes</p>
          <p className="text-lg text-gray-700">All you need is collateral and your NRC. Get your loan today!</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center text-gray-900">
              <Clock className="mr-2 h-5 w-5 text-green-600" />
              Flexible Loan Options
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-900">
              <li>Monthly based loans</li>
              <li>Weekly based loans</li>
              <li>Salary advance loans</li>
            </ul>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-cente text-gray-900">
              <CheckCircle className="mr-2 h-5 w-5 text-green-600" />
              Why Choose ZaniCredit?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-900">
              <li>Quick approval process</li>
              <li>Competitive interest rates</li>
              <li>Flexible repayment options</li>
              <li>Professional and friendly service</li>
            </ul>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto">
          <h3 className="text-xl font-semibold mb-2 text-gray-900">Loan Calculator</h3>
          <p className="text-sm text-gray-600 mb-4">Calculate your loan repayment after one month</p>
          <form onSubmit={calculateLoan}>
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="loanAmount" className="block text-sm font-medium text-gray-900">
                  Loan Amount (K)
                </label>
                <input
                  id="loanAmount"
                  type="number"
                  placeholder="Enter loan amount"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 text-gray-900"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 flex items-center justify-center"
              >
                <Calculator className="mr-2 h-4 w-4" /> Calculate Repayment
              </button>
            </div>
          </form>
          {repaymentAmount !== null && (
            <div className="mt-4 text-center">
              <p className="text-lg font-semibold text-gray-900">Repayment Amount after 1 month:</p>
              <p className="text-2xl font-bold text-green-600">K{repaymentAmount.toFixed(2)}</p>
            </div>
          )}
        </div>
      </main>

      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center text-center">
            <p className="text-sm text-gray-500 mb-4">
              © {year} Zani Credit Solutions Ltd. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4 mb-4">
              <a href="tel:09739036030" className="text-sm text-gray-500 hover:text-green-600">
                <Phone className="h-4 w-4 inline mr-1" />
                09739036030
              </a>
              <a href="mailto:zanicredit@gmail.com" className="text-sm text-gray-500 hover:text-green-600">
                <Mail className="h-4 w-4 inline mr-1" />
                zanicredit@gmail.com
              </a>
              <a href="https://www.facebook.com/share/Xbmt5fJyrkq9WoKj/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-green-600">
                <Facebook className="h-4 w-4 inline mr-1" />
                Facebook
              </a>
            </div>
            <p className="text-sm text-gray-500 flex items-center justify-center mb-4">
              <MapPin className="h-4 w-4 inline mr-1" />
              EW Tarrys Building, Cairo Road, Lusaka
            </p>

            <p className="text-sm text-gray-500 flex items-center justify-center mb-4">
              <MapPin className="h-4 w-4 inline mr-1" />
              Shop number 38B, Arcades Shopping Mall, Lusaka
            </p>
            <div className="text-xs text-gray-400">
              <Link href="/terms" className="hover:underline">Terms of Service</Link>
              {' | '}
              <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}