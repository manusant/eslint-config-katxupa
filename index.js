module.exports = {
    globals: {
        // Optional Utilities
        optionalOf: 'readonly',
        allPresent: 'readonly',
        anyPresent: 'readonly',
        nonePresent: 'readonly',
        coalesce: 'readonly',
        // Scope Functions
        runIt: 'readonly',
        withIt: 'readonly',
        // List Functions
        listOf: 'readonly',
        mutableListOf: 'readonly',
        emptyList: 'readonly',
        // Set Functions
        setOf: 'readonly',
        mutableSetOf: 'readonly',
        emptySet: 'readonly',
        // Duration Functions
        durationOf: 'readonly',
        // Either Functions
        left: 'readonly',
        right: 'readonly',
        fold: 'readonly',
        // Range Functions
        rangeTo: 'readonly',
        rangeUntil: 'readonly',
        inRange: 'readonly',
        // Reducer Functions
        reducerOf: 'readonly',
        // Result Functions
        ok: 'readonly',
        error: 'readonly',
    }
};