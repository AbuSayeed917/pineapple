"use client";

export function LegalPage() {
    return (
        <div className="pt-32 pb-20 px-4 max-w-4xl mx-auto font-mono text-onyx-dim">
            <h1 className="text-4xl text-white font-display font-bold mb-12">LEGAL PROTOCOLS</h1>

            <section className="mb-12">
                <h2 className="text-xl text-onyx-primary mb-4">1. TERMS OF ENGAGEMENT</h2>
                <p className="mb-4">
                    By accessing the Onyx Protocol interface, you agree to comply with all Federation guidelines regarding digital assets and intellectual property.
                </p>
                <p>
                    Unauthorized extraction of our codebases or design tokens will result in immediate termination of access.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-xl text-onyx-primary mb-4">2. DATA PRIVACY</h2>
                <p>
                    We do not track user movements beyond necessary system metrics.
                    Your IP address and session data are encrypted locally and never sold to third-party brokers.
                </p>
            </section>

            <section>
                <h2 className="text-xl text-onyx-primary mb-4">3. LIABILITY</h2>
                <p>
                    Onyx Protocol is not responsible for any cognitive overload caused by our high-fidelity visuals.
                </p>
            </section>
        </div>
    );
}
