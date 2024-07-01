import React from "react";

export default function Socials() {
    return (
        <section id="socials" className="bg-gray-900 text-white">
            <div className="container px-5 py-10 mx-auto flex justify-center space-x-4">
                <a href="https://www.linkedin.com/in/yourprofile" className="hover:text-green-400">
                    LinkedIn
                </a>
                <a href="https://github.com/yourprofile" className="hover:text-green-400">
                    GitHub
                </a>
                <a href="https://twitter.com/yourprofile" className="hover:text-green-400">
                    Twitter
                </a>
                <a href="https://scholar.google.com/citations?user=yourprofile" className="hover:text-green-400">
                    Google Scholar
                </a>
            </div>
        </section>
    );
}
