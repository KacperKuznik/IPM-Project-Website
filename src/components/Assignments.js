import Card from "./Card";
import SectionLayout from "./SectionLayout";

// Team members and their corresponding PDF filenames (without .pdf)
const members = [
    { name: "Matej Palider", file: "asg1" },
    { name: "Kacper Kuźnik", file: "Assignment1_Kacper" },
    { name: "Dawid Bogacz", file: "asg1" },
    { name: "Mikołaj Nowacki", file: "Assignment1Mikolaj" },
];

export default function Assignments() {
    return (
        <SectionLayout header={"Assignments"} description={""}>
            <div className="flex flex-row space-x-4">
                {/* Assignment 1: show popup with member links */}
                <Card imageSrc={"/images/assignment1.png"} description={"Assignment #1"} popup={true}>
                    <div className="mt-4">
                        <p className="text-sm text-gray-500">Select a team member to view their PDF:</p>
                        <ul className="mt-2 space-y-2">
                            {members.map((m) => (
                                <li key={m.file}>
                                    <a
                                        className="text-blue-600 hover:underline"
                                        href={`/pdf/${m.file}`}
                                        target="_self"
                                        rel="noreferrer"
                                    >
                                        {m.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Card>

                {/* Assignment 2 (left unchanged) */}
                <Card imageSrc={"/images/assignment2.jpg"} description={"Assignment #2"} popup={true} />
            </div>
        </SectionLayout>
    );
}