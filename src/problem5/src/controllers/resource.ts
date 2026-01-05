import { Request, Response } from 'express';
import * as resourceModel from '../repositories/resource';

export const create = async (req: Request, res: Response) => {
    const { name, description } = req.body;
    if (!name || !description) {
        return res.status(400).json({ error: 'Name and description are required' });
    }
    try {
        const resource = await resourceModel.createResource(name, description);
        res.status(201).json(resource);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create resource' });
    }
};

export const list = async (req: Request, res: Response) => {
    const { name } = req.query;
    try {
        let resources = await resourceModel.getResources();

        if (name) {
            const filter = (name as string).toLowerCase();
            resources = resources.filter(r => r.name.toLowerCase().includes(filter));
        }

        res.json(resources);
    } catch (error) {
        res.status(500).json({ error: 'Failed to list resources' });
    }
};

export const get = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    try {
        const resource = await resourceModel.getResourceById(id);
        if (resource) {
            res.json(resource);
        } else {
            res.status(404).json({ error: 'Resource not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to get resource' });
    }
};

export const update = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const { name, description } = req.body;
    try {
        const resource = await resourceModel.updateResource(id, name, description);
        if (resource) {
            res.json(resource);
        } else {
            res.status(404).json({ error: 'Resource not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to update resource' });
    }
};

export const remove = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    try {
        const success = await resourceModel.deleteResource(id);
        if (success) {
            res.status(204).send();
        } else {
            res.status(404).json({ error: 'Resource not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete resource' });
    }
};
