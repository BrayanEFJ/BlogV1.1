
export const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-6xl mx-auto px-4 py-10">

                {/* Top section with logo and description */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-2xl font-bold">Company Name</h2>
                        <p className="text-gray-400 mt-2 max-w-md">We provide high-quality products and services to our clients with a focus on excellence and innovation.</p>
                    </div>

                    
                </div>

                {/* Middle section with links */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <h3 className="text-lg font-medium mb-4">Products</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Comparisons</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-medium mb-4">Resources</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Guides</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Support</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">API</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-medium mb-4">Company</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Jobs</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Partners</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-medium mb-4">Legal</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Settings</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom section with copyright */}
                <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Company Name. All rights reserved.</p>

                    <div className="mt-4 md:mt-0">
                        <ul className="flex space-x-6">
                            <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}