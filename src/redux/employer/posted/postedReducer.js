const initState = {
    loading: false,
    posts: [
      {
        id: 0,
        title: "some title",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id donec ultrices tincidunt arcu non sodales neque. Diam quam nulla porttitor massa id. Facilisis leo vel fringilla est ullamcorper eget nulla facilisi. Urna et pharetra pharetra massa massa ultricies mi quis. Vestibulum sed arcu non odio euismod lacinia at quis risus. Dis parturient montes nascetur ridiculus mus mauris. Nam libero justo laoreet sit. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Eleifend mi in nulla posuere sollicitudin. Non curabitur gravida arcu ac. Ut tristique et egestas quis ipsum suspendisse ultrices gravida. Lectus arcu bibendum at varius vel pharetra vel turpis. Sed risus ultricies tristique nulla. Amet justo donec enim diam vulputate ut pharetra sit. Nulla facilisi morbi tempus iaculis. Luctus venenatis lectus magna fringilla urna porttitor rhoncus.

        Imperdiet nulla malesuada pellentesque elit eget gravida cum. Ac tortor dignissim convallis aenean et. Ut diam quam nulla porttitor massa id. Orci nulla pellentesque dignissim enim sit amet. Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam. Tortor id aliquet lectus proin nibh nisl condimentum. Id venenatis a condimentum vitae sapien. Elementum eu facilisis sed odio morbi quis. Justo donec enim diam vulputate ut pharetra sit. Dui sapien eget mi proin sed libero enim sed faucibus. Arcu cursus euismod quis viverra nibh cras. Urna nec tincidunt praesent semper feugiat nibh. Metus dictum at tempor commodo ullamcorper. Convallis convallis tellus id interdum velit laoreet. Quis varius quam quisque id diam vel quam.
        
        Fringilla phasellus faucibus scelerisque eleifend donec pretium. Cras fermentum odio eu feugiat pretium nibh. Lorem donec massa sapien faucibus et. Velit dignissim sodales ut eu sem integer vitae justo. Facilisi etiam dignissim diam quis enim lobortis. Imperdiet sed euismod nisi porta lorem. Enim ut tellus elementum sagittis vitae et leo duis. Ullamcorper eget nulla facilisi etiam dignissim diam. Urna neque viverra justo nec ultrices dui sapien eget mi. Nibh tellus molestie nunc non blandit massa enim nec dui. Phasellus egestas tellus rutrum tellus pellentesque eu. Eu turpis egestas pretium aenean pharetra magna.
        
        Sem integer vitae justo eget magna fermentum iaculis. Tempor orci eu lobortis elementum nibh tellus molestie. Placerat orci nulla pellentesque dignissim enim sit. Nibh sit amet commodo nulla facilisi nullam vehicula ipsum a. Lectus proin nibh nisl condimentum id venenatis a. Metus dictum at tempor commodo ullamcorper a lacus vestibulum sed. Fermentum odio eu feugiat pretium nibh ipsum consequat. Amet aliquam id diam maecenas ultricies mi eget mauris. Ac orci phasellus egestas tellus. Sed libero enim sed faucibus turpis. Quam viverra orci sagittis eu volutpat odio facilisis. Massa vitae tortor condimentum lacinia quis vel eros donec ac.
        
        Commodo ullamcorper a lacus vestibulum sed arcu non odio. Auctor augue mauris augue neque gravida in fermentum. Dictumst quisque sagittis purus sit. Molestie nunc non blandit massa enim nec dui nunc mattis. Neque volutpat ac tincidunt vitae semper. Pellentesque adipiscing commodo elit at. Ipsum faucibus vitae aliquet nec ullamcorper sit amet. Amet luctus venenatis lectus magna fringilla urna porttitor. Est lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque. Lobortis feugiat vivamus at augue eget arcu dictum varius duis. Ultrices neque ornare aenean euismod elementum nisi quis eleifend quam. Aliquam nulla facilisi cras fermentum odio eu. Egestas dui id ornare arcu odio ut sem nulla. Id velit ut tortor pretium viverra suspendisse potenti nullam ac.`,
        salary: "1000",
        organization: "shaw",
        requirements: "skills",
        postedBy: "some",
      },
    ],
  
  error: "",
};

const postedReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_POST":
      return {
        ...state,
        posts: action.payload,
      };
    case "ADD_POST":
      return {
        loading: false,
        posts: [...state.posts, action.payload],
        error: ""
      };
      case 'FETCH_EMPLOYER_POSTS_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_EMPLOYER_POSTS_FAILURE':
      return {
        loading: false,
        posts: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default postedReducer;
