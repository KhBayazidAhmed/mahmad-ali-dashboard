import React from "react";

export default function Page() {
  return (
    <main className="p-4 container mx-auto ">
      <h1 className="text-2xl rounded-lg p-4 font-bold mb-4 bg-muted sm:text-3xl ">
        How to Use WhatsApp for Our Service
      </h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold sm:text-2xl ">
          Step 1: Connect with Us on WhatsApp
        </h2>
        <p className="text-muted-foreground sm:text-lg ">
          To start using our service, open WhatsApp and send a message to our
          official number:{" "}
          <span className="font-medium text-primary">+123456789</span>. Be sure
          to save this number for future communication.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold sm:text-2xl ">
          Step 2: Get Service Help
        </h2>
        <p className="text-muted-foreground sm:text-lg ">
          To request help or get information about our services, simply send the
          message{" "}
          <code className="bg-muted px-1 py-0.5 rounded text-muted-foreground">
            /help
          </code>
          .
        </p>
        <div className="bg-muted p-4 rounded-lg border border-border mt-2">
          <p>
            <strong>Example:</strong>
          </p>
          <p>
            <code className="block bg-card px-2 py-1 rounded text-card-foreground">
              /profile
            </code>
          </p>
          <p className="text-sm text-muted-foreground mt-2 sm:text-base ">
            Response:
          </p>
          <p>
            <code className="block bg-card px-2 py-1 rounded text-card-foreground">
              Name: Your Name
              <br />
              Balance: ***
            </code>
          </p>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold sm:text-2xl ">
          Step 3: Message Format for ID Card Request
        </h2>
        <p className="text-muted-foreground sm:text-lg ">
          If you&apos;re requesting an ID card, please use the following format:
        </p>
        <div className="bg-muted p-4 rounded-lg border border-border mt-2">
          <p>
            <strong>Format:</strong>
          </p>
          <p>
            <code className="block bg-card px-2 py-1 rounded text-card-foreground">
              <br />
              Nid_No = [National ID Number]
              <br />
              From_No = [Full Address]
              <br />
              Voter_No = [Voter ID Number]
              <br />
              Birth_No = [Birth Registration Number]
              <br />
              Mobile_No = [Mobile Number]
              <br />
              ————————————
              <br />
              Name = [Full Name]
              <br />
              ————————————
              <br />
              Note = [Any Additional Information]
              <br />
              ————————————
              <br />
              Type: [Select the Type of Copy]
              <br />
              ————————————
              <br />
              Type-Sing copy = 1
              <br />
              Type-Server copy = 2
              <br />
            </code>
          </p>
          <p className="text-sm text-muted-foreground mt-2 sm:text-base ">
            Example:
          </p>
          <p>
            <code className="block bg-card px-2 py-1 rounded text-card-foreground">
              /card
              <br />
              Nid_No = [Nid No]
              <br />
              From_No = [NID From No]
              <br />
              Voter_No = [Voter ID]
              <br />
              Birth_No = [Birth No]
              <br />
              Mobile_No = [Mobile No]
              <br />
              ————————————
              <br />
              Name = John Doe
              <br />
              ————————————
              <br />
              Note = If you want to add extra information.
              <br />
              ————————————
              <br />
              Type will be:
              <br />
              Type-Sing copy = 1
              <br />
              Type-Server copy = 2
              <br />
              I want Both copies = 3
              <br />
            </code>
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold sm:text-2xl ">
          What Happens Next?
        </h2>
        <p className="text-muted-foreground sm:text-lg ">
          After we receive your message:
        </p>
        <ul className="list-disc list-inside text-muted-foreground sm:text-lg ">
          <li>We will process your request and send you a confirmation.</li>
          <li>
            You will receive a copy of the requested information or service.
          </li>
          <li>
            If necessary, we will follow up with additional details or
            clarifications.
          </li>
        </ul>
      </section>
    </main>
  );
}
