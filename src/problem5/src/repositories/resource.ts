import { getDb } from '../db';
import { Resource } from '../models/resource';

export const getResources = async (): Promise<Resource[]> => {
    const db = await getDb();
    return db.all<Resource[]>('SELECT * FROM resources');
};

export const getResourceById = async (id: number): Promise<Resource | undefined> => {
    const db = await getDb();
    return db.get<Resource>('SELECT * FROM resources WHERE id = ?', id);
};

export const createResource = async (name: string, description: string): Promise<Resource> => {
    const db = await getDb();
    const result = await db.run('INSERT INTO resources (name, description) VALUES (?, ?)', name, description);
    return { id: result.lastID!, name, description };
};

export const updateResource = async (id: number, name: string, description: string): Promise<Resource | undefined> => {
    const db = await getDb();
    const result = await db.run('UPDATE resources SET name = ?, description = ? WHERE id = ?', name, description, id);
    if (result.changes && result.changes > 0) {
        return { id, name, description };
    }
    return undefined;
};

export const deleteResource = async (id: number): Promise<boolean> => {
    const db = await getDb();
    const result = await db.run('DELETE FROM resources WHERE id = ?', id);
    return !!(result.changes && result.changes > 0);
};
