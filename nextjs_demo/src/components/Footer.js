import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-400 py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between flex-wrap">
                    <div className="w-full sm:w-auto">
                        <a href="#" className="text-white flex items-center mb-4">
                            <img src="your-logo.svg" alt="Logo" className="h-6" />
                        </a>
                    </div>
                    <div className="flex justify-between w-full sm:w-auto">
                        <div className="mr-16 mb-4">
                            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Solutions</h3>
                            <ul className="mt-4 space-y-2">
                                <li><a href="#" className="hover:text-white">Marketing</a></li>
                                <li><a href="#" className="hover:text-white">Analytics</a></li>
                                <li><a href="#" className="hover:text-white">Commerce</a></li>
                                <li><a href="#" className="hover:text-white">Insights</a></li>
                            </ul>
                        </div>
                        <div className="mr-16 mb-4">
                            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Support</h3>
                            <ul className="mt-4 space-y-2">
                                <li><a href="#" className="hover:text-white">Pricing</a></li>
                                <li><a href="#" className="hover:text-white">Documentation</a></li>
                                <li><a href="#" className="hover:text-white">Guides</a></li>
                                <li><a href="#" className="hover:text-white">API Status</a></li>
                            </ul>
                        </div>
                        <div className="mr-16 mb-4">
                            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Company</h3>
                            <ul className="mt-4 space-y-2">
                                <li><a href="#" className="hover:text-white">About</a></li>
                                <li><a href="#" className="hover:text-white">Blog</a></li>
                                <li><a href="#" className="hover:text-white">Jobs</a></li>
                                <li><a href="#" className="hover:text-white">Press</a></li>
                                <li><a href="#" className="hover:text-white">Partners</a></li>
                            </ul>
                        </div>
                        <div className="mb-4">
                            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Legal</h3>
                            <ul className="mt-4 space-y-2">
                                <li><a href="#" className="hover:text-white">Claim</a></li>
                                <li><a href="#" className="hover:text-white">Privacy</a></li>
                                <li><a href="#" className="hover:text-white">Terms</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-800 pt-8">
                    <p className="text-base text-gray-400 sm:text-center">
                        © 2020 Your Company, Inc. All rights reserved.
                    </p>
                    <div className="mt-4 flex justify-center space-x-6">
                        <a href="#" className="text-gray-400 hover:text-white">
                            <span className="sr-only">Facebook</span>
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                {/* Facebook icon SVG */}
                            </svg>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            <span className="sr-only">Instagram</span>
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                {/* Instagram icon SVG */}
                            </svg>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            <span className="sr-only">Twitter</span>
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                {/* Twitter icon SVG */}
                            </svg>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            <span className="sr-only">GitHub</span>
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                {/* GitHub icon SVG */}
                            </svg>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            <span className="sr-only">YouTube</span>
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                {/* YouTube icon SVG */}
                            </svg>
                        </a>
                    </div>
                    <div className="mt-8 flex justify-center">
                        <form className="sm:max-w-md">
                            <label htmlFor="email-address" className="sr-only">Email address</label>
                            <input id="email-address" name="email" type="email" required className="w-full px-4 py-2 border border-transparent rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" placeholder="Enter your email" />
                            <button type="submit" className="mt-3 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer