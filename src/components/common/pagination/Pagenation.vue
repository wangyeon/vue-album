<template>
    <Pagination :total="total >= 1000 ? 1000 : total"  :items-per-page="30"  :default-pages="currentPage">
    <!-- <Pagination v-slot="{ page }" :total="100" :sibling-count="1" :items-per-page="30" show-edges :default-pages="1"></Pagination> -->
        <PaginationContent v-slot="{ items }" >
            <PaginationFirst @click="changePage(1)"/>
            <PaginationPrevious @click="changePage(currentPage -1)"/> 
            <template v-for="(item, index) in items" :key="index">
                <PaginationItem v-if="item.type === 'page'" :value="item.value" as-child>
                    <Button @click="changePage(item.value)"  :variant="item.value === currentPage ? 'default' : 'outline'">
                        {{ item.value }}
                    </Button>
                </PaginationItem>
                <PaginationEllipsis v-else :index="index" />
            </template>
            <PaginationNext @click="changePage(currentPage + 1)"/>
            <PaginationLast @click="changePage(Math.min(totalPages, 34))"/>
        </PaginationContent>
    </Pagination>
    <div>

    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Button } from "@/components/ui/button";
import { Pagination, PaginationEllipsis, PaginationFirst, PaginationLast, PaginationContent, 
         PaginationItem, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { useStore } from "@/stores/index";

export default defineComponent({
    props:{
        total: {
            type: Number,
            required: true,
        },
        totalPages:{
            type:Number,
            required: true,
        },
    },

    name: "CommonPagination",
    components: {
        Button, Pagination, PaginationEllipsis, PaginationFirst, PaginationLast, PaginationContent, 
        PaginationItem, PaginationNext, PaginationPrevious 
    },
    data() {
        return {
            store: useStore(),
        }
    },
    computed: {
        currentPage() {
            return this.store.page;
        }
    },
    methods: {
        changePage(page: number) {
            this.store.setPage(page);
        }
    },
});
</script>

<style lang="scss" scoped>

</style>