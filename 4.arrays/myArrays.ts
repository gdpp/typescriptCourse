const superHeros: string[] = [];
let randNumbers: number[] = [];

superHeros.push('spiderman');
superHeros.push('hulk');

randNumbers = [1, 5, 7];

const tags: Array<string> = [];

tags.push('frontend');
tags.push('backend');
tags.push('fullstack');

type Post = {
    readonly _id: string;
    title: string;
    body: string;
    author: string;
};

const postsArr: Array<Post> = [];

postsArr.push({
    _id: crypto.randomUUID.toString(),
    title: 'Css Variables',
    body: 'A simple example for css variables',
    author: 'Gp',
});

export {};
