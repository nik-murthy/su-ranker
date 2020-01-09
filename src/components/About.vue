<template>
    <v-container>
        
        <p class="text-center font-weight-bold display-1">Welcome to Aussie Suburb Ranker!</p>          
        
          <blockquote class="blue-grey darken-1 white--text font-italic blockquote text-center">"Given a budget, what are the best 
              suburbs to purchase an investment property in Australia?"</blockquote><br/>
            <p>Aussie Suburb Ranker tries to answer this question by ranking suburbs based on three factors - </p>            
            <p><ul>
                <li>Population growth</li>
                <li>Hospitals</li>
                <li>Universities</li>
            </ul>
            </p>            
            <p>
                Using this website, you can search for a suburb that fits your budget! Click on <var>"SUBURBS"</var> on the top right
                to view all suburbs.
            </p>
            <p class="title">Search and Sort</p>
        
            <p>
                On the <var>"SUBURBS"</var> page, if you enter 400,000 and hit search, you will be shown all the suburbs where 
                the median property price is within 400,000. 
            </p>
            <p>
                There is a switch on the left of the budget/price field. If the switch is to the left, search is 
                performed on median house price. If the switch is to the right, then search
                is performed by median unit price. (Data sourced from Domain.com.au)
            </p>
            <p>
                You can filter your results based on the state of your interest. You can also sort the suburbs based
                on their overall rank (Relevance) or based on population growth (Demographics).
            </p>
            <p class="title">Suburb Details</p>
            <p>
                Clicking on a suburb will show you the details of the suburb such as summary from Wikipedia, which hospitals
                and universities are in the suburb and what the population growth is like.
            </p>
            <p>
                You can sort and filter the results even without performing a search. The list of suburbs will include
                all suburbs in Australia. Hope you enjoy using Aussie Suburb Ranker and thank you for visiting!
            </p>
    
    </v-container>
</template>
<script>
export default {
    name: "About"
}
</script>