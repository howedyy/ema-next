import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const dataPath = path.join(process.cwd(), 'src/data/website-data.json');

export async function GET() {
    try {
        const fileContents = fs.readFileSync(dataPath, 'utf8');
        const data = JSON.parse(fileContents);
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to load data' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const newData = await request.json();
        fs.writeFileSync(dataPath, JSON.stringify(newData, null, 2), 'utf8');
        return NextResponse.json({ message: 'Data updated successfully' });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update data' }, { status: 500 });
    }
}
