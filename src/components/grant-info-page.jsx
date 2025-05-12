export default function GrantInfoPage() {
  return (
    <div className="flex flex-col min-h-screen bg-foreground">
      <main className="flex-1">
        <div className="max-w-5xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-normal text-[#444444] text-center mb-8">
            Grant Programs currently provide up to $7,395* per year to those who qualify.
          </h1>

          <p className="text-lg text-[#444444] max-w-3xl mx-auto text-center mb-12">
            Returning to school is both thrilling and difficult. Considering your desired level of study and
            professional aspirations, we can assist you in selecting the ideal organization. You can match with colleges
            and institutions in a matter of minutes.
          </p>

          <p className="text-xs text-[#888888] mb-8">
            Students, instructors, institutions, and other online audiences can find useful information on higher
            education, colleges and universities, degrees, programs, careers, salaries, and other topics on our website.
            The facts and information that are presented are subject to change. Anything that appears on this page does
            not indicate or imply a formal affiliation with the business, institution, or trademark. Although thought to
            be accurate at the time of publication, information is subject to change without notice, and no warranty is
            given. Before depending on any information, make sure you check with the schools. Those who meet the
            requirements may be eligible for financial aid. Options that are shown can be sponsored or suggested
            outcomes; they aren't always determined by your choices.
          </p>

          <p className="text-xs text-[#888888] mb-4">
            The California Civil Rights Act (CCPA). You have the right to request that we not sell your personal
            information if you live in California. More information about what we collect and how we share your personal
            information is available in our Privacy Policy.
          </p>

          <p className="text-xs text-[#888888]">
            *
            <a href="https://studentaid.ed.gov/types/grants-scholarships/pell" className="text-[#888888]">
              https://studentaid.ed.gov/types/grants-scholarships/pell
            </a>
          </p>
        </div>
      </main>

      <footer className="bg-[#3498db] text-white py-4 text-center">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-sm">
            © 2024 |{" "}
            <a href="#" className="text-white">
              TERMS
            </a>{" "}
            |{" "}
            <a href="#" className="text-white">
              PRIVACY
            </a>{" "}
            |{" "}
            <a href="#" className="text-white">
              CONTACT
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}
