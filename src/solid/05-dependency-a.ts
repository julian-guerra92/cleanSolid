import { PostService } from './05-dependency-b';
import { JsonDataBaseService, LocalDataBaseService, WebbApiPostsService } from './05-dependency-c';


// Main
(async () => {

    //const provider = new JsonDataBaseService(); //Se aplica la inyección de dependencias
    //const provider = new LocalDataBaseService();
    const provider = new WebbApiPostsService();

    const postService = new PostService(provider);

    const posts = await postService.getPosts();

    console.log({ posts })


})();